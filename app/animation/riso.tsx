"use client";

/**
 * RisoWallpaper — an interactive risograph-halftone WebGL background.
 * Adapted from a Riso Kit gradient (risokit.dev).
 *
 * Renders a fixed, full-viewport <canvas> behind your content. It tracks the
 * mouse on `window` (so it reacts no matter what's layered on top) and is
 * `pointer-events: none` by default, so every click/link/button passes through.
 *
 * Zero dependencies beyond React. No WebGL libraries, no build config.
 *
 *   import RisoWallpaper from "./RisoWallpaper.jsx";
 *
 *   export default function App() {
 *     return (
 *       <>
 *         <RisoWallpaper />
 *         <main>…your site…</main>
 *       </>
 *     );
 *   }
 *
 * Props
 *   idle       number  0–1 idle drift when the mouse is still (default 0.5; 0 = frozen)
 *   fixed      bool    position:fixed full-viewport (default true). false → fills its
 *                      positioned parent instead (give the parent position:relative).
 *   zIndex     number  stacking index (default -1)
 *   className  string  extra class on the canvas
 *   style      object  inline style overrides merged last
 */
import {type CSSProperties, useEffect, useRef} from "react";

type RisoWallpaperProps = {
  idle?: number;
  fixed?: boolean;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
};

type UniformName =
  | "uRes"
  | "uTime"
  | "uMouse"
  | "uDown"
  | "uIdle"
  | "uRipPos"
  | "uRipAge";

const VERT =
  "attribute vec2 aPos; void main(){ gl_Position = vec4(aPos,0.0,1.0); }";

const FRAG = `
  precision highp float;
  uniform vec2  uRes;
  uniform float uTime;
  uniform vec2  uMouse;   // pixels, y-up
  uniform float uDown;    // 0/1 mouse held
  uniform float uIdle;    // idle auto-motion 0..1
  uniform vec2  uRipPos[8];
  uniform float uRipAge[8];

  vec2 coord(){ return (gl_FragCoord.xy - 0.5*uRes)/uRes.y; }
  vec2 toCoord(vec2 px){ return (px - 0.5*uRes)/uRes.y; }
  float ripples(vec2 p, float freq, float speed){
    float s = 0.0;
    for(int i=0;i<8;i++){
      float t = uRipAge[i];
      if(t < 0.0) continue;
      vec2 rp = toCoord(uRipPos[i]);
      float d = length(p - rp);
      s += sin((d - t*speed)*freq) * exp(-d*2.2) * exp(-t*1.6);
    }
    return s;
  }
  float rk_hash(vec2 p){
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  vec3 sampleGradient(vec2 uv){
    vec3 acc = vec3(0.0); float wsum = 0.0;
    #define RKSTOP(px,py,cr,cg,cb,w) { float d = distance(uv, vec2(px,py)); float ww = (w)/(d*d+0.001); acc += vec3(cr,cg,cb)*ww; wsum += ww; }
    RKSTOP(0.05, 0.05, 0.45, 0.35, 0.95, 0.0)
    RKSTOP(0.95, 0.10, 0.98, 0.35, 0.50, 1.0)
    RKSTOP(0.00, 0.95, 1.00, 0.92, 0.25, 1.0)
    RKSTOP(0.50, 1.00, 0.20, 0.85, 0.95, 1.0)
    RKSTOP(1.00, 1.00, 0.98, 0.50, 0.30, 1.0)
    #undef RKSTOP
    return acc / max(wsum, 0.0001);
  }
  const float CELL = 14.0;
  const float DOT_SCALE = 2.2;
  const float NOISE = 0.03;

  void main(){
    vec2 res = uRes;
    vec2 frag = gl_FragCoord.xy;

    float rip = ripples(coord(), 16.0, 1.5);
    vec2 toM = uMouse - frag;
    float md = length(toM);
    float bulge = exp(-md / (0.18 * res.y));
    vec2 disp = vec2(rip) * 30.0;
    disp += normalize(toM + 1e-4) * 36.0 * bulge * (0.6 + uDown);
    disp += vec2(sin(uTime*0.3), cos(uTime*0.23)) * 6.0 * uIdle;
    vec2 dfrag = frag + disp;

    vec2 cellId     = floor(dfrag / CELL);
    vec2 cellCenter = (cellId + 0.5) * CELL;
    vec2 cellUV     = (dfrag - cellCenter) / CELL;
    vec3 cellColor  = sampleGradient(cellCenter / res);
    float lum = dot(cellColor, vec3(0.299, 0.587, 0.114));
    float radius = (1.0 - lum) * 0.5 * DOT_SCALE + bulge * 0.35;
    float mask = 1.0 - smoothstep(radius - 0.04, radius + 0.04, length(cellUV));
    vec3 halftone = mix(vec3(1.0), cellColor, mask);

    vec3 smoothCol = sampleGradient(frag / res);
    float reveal = clamp(exp(-md / (0.22 * res.y)) * (0.7 + 0.5 * uDown), 0.0, 1.0);
    vec3 col = mix(halftone, smoothCol, reveal);

    col += (rk_hash(dfrag) - 0.5) * NOISE;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function RisoWallpaper({
  idle = 0.5,
  fixed = true,
  zIndex = -1,
  className,
  style,
}: RisoWallpaperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // keep the latest idle value without re-running the heavy effect
  const idleRef = useRef(idle);
  idleRef.current = idle;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { antialias: true }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return; // graceful no-op; fallback background shows through

    // --- compile + link ---
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        console.error(gl.getShaderInfoLog(s));
      return s;
    };
    const prog = gl.createProgram();
    const vert = sh(gl.VERTEX_SHADER, VERT);
    const frag = sh(gl.FRAGMENT_SHADER, FRAG);
    if (!prog || !vert || !frag) return;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.bindAttribLocation(prog, 0, "aPos");
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const U = {} as Record<UniformName, WebGLUniformLocation | null>;
    (["uRes", "uTime", "uMouse", "uDown", "uIdle", "uRipPos", "uRipAge"] as const).forEach(
      (n) => (U[n] = gl.getUniformLocation(prog, n))
    );

    // --- state ---
    let dpr = 1,
      W = 0,
      H = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, down: 0 };
    const MAXRIP = 8;
    const ripPos = new Float32Array(MAXRIP * 2);
    const ripAge = new Float32Array(MAXRIP).fill(-1);
    const ripStart = new Float32Array(MAXRIP).fill(-1);
    let ripHead = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, Math.floor(r.width * dpr));
      H = Math.max(1, Math.floor(r.height * dpr));
      canvas.width = W;
      canvas.height = H;
      gl.viewport(0, 0, W, H);
    };
    resize();
    mouse.x = mouse.tx = W * 0.5;
    mouse.y = mouse.ty = H * 0.5;

    // mouse is in window coords; map into the canvas box
    const setTarget = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (cx - r.left) * dpr;
      mouse.ty = (r.height - (cy - r.top)) * dpr; // y-up
    };
    const addRipple = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect();
      const i = ripHead % MAXRIP;
      ripPos[i * 2] = (cx - r.left) * dpr;
      ripPos[i * 2 + 1] = (r.height - (cy - r.top)) * dpr;
      ripStart[i] = performance.now() / 1000;
      ripHead++;
    };

    const onMove = (e: MouseEvent) => setTarget(e.clientX, e.clientY);
    const onDown = (e: MouseEvent) => {
      mouse.down = 1;
      addRipple(e.clientX, e.clientY);
    };
    const onUp = () => (mouse.down = 0);
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      setTarget(t.clientX, t.clientY);
      mouse.x = mouse.tx;
      mouse.y = mouse.ty;
      mouse.down = 1;
      addRipple(t.clientX, t.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setTarget(t.clientX, t.clientY);
    };
    const onTouchEnd = () => (mouse.down = 0);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // --- loop ---
    const start = performance.now();
    let raf = 0;
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      const tn = now / 1000;
      for (let i = 0; i < MAXRIP; i++) {
        if (ripStart[i] < 0) {
          ripAge[i] = -1;
          continue;
        }
        const age = tn - ripStart[i];
        ripAge[i] = age > 4.0 ? -1 : age;
        if (ripAge[i] < 0) ripStart[i] = -1;
      }
      gl.uniform2f(U.uRes, W, H);
      gl.uniform1f(U.uTime, t);
      gl.uniform2f(U.uMouse, mouse.x, mouse.y);
      gl.uniform1f(U.uDown, mouse.down);
      gl.uniform1f(U.uIdle, idleRef.current);
      gl.uniform2fv(U.uRipPos, ripPos);
      gl.uniform1fv(U.uRipAge, ripAge);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const frame = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // --- teardown ---
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
    };
  }, []); // set up once

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: fixed ? "fixed" : "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

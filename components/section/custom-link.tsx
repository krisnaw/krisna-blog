import {motion} from "framer-motion";
import React from 'react';
import {useMouse} from "@uidotdev/usehooks";

const CustomLink = () => {
  const [mouse, ref] = useMouse<HTMLDivElement>();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  const isIntersecting = xIntersecting && yIntersecting;


  return (
    <span ref={ref} className="cursor-default ml-2 text-slate-800 relative inline-flex md:static">
      <span>
        <a className="cursor-default"
          onClick={() => alert("Coming soon!")}
          href="mailto:krisna.w2010@gmail.com">let&#39;s chat!</a>
      </span>

      {isIntersecting && (
        <motion.div
          animate={{
            opacity: 1,
            scale: 1,
            transform: `translate3d(${mouse.elementX}px, ${mouse.elementY}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0.94 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="absolute bg-orange-600 text-white rounded-full px-2 py-1 text-xs font-semibold cursor-default"
          style={{
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        >
          Copy email {mouse.elementY}
        </motion.div>
      )}
    </span>
  );
};

export default CustomLink;

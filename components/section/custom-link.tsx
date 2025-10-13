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
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          exit={{ opacity: 0, scale: 0.5}}
          whileTap={{ scale: 1.5 }}
          className="absolute bg-orange-600 text-white rounded-full px-2 py-1 text-xs font-semibold cursor-default"
          style={{
            top: mouse.elementY,
            left: mouse.elementX,
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
import { motion } from "framer-motion";
import { useRef } from "react";

import { useFollowPointer } from "../hooks/useFollowPointer";

const Transition = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <h3 className="text-4xl font-bold">Transition</h3>{" "}
      <p>
        This spring cursor is made up with framer motion (which is currently
        comment)
      </p>
      {/* <motion.div
        ref={ref}
        className="pointer-events-none fixed h-4 w-4 rounded-full bg-emerald-700"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      /> */}
      <motion.div
        animate={{ x: 0, rotate: 0 }}
        transition={{ from: 180, duration: 2 }}
        className="relative mx-auto my-5 h-40 w-40 rounded bg-red-400 text-3xl text-white"
      >
        refresh page to see
      </motion.div>
    </>
  );
};
export default Transition;

import { motion } from "framer-motion";
import { useRef } from "react";

import { useFollowPointer } from "../hooks/useFollowPointer";

const Pointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed h-4 w-4 rounded-full bg-emerald-700"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};

export default Pointer;

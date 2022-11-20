import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const buttonVariants = {
  active: {
    scale: 0.8,
  },
  hover: {
    scale: 1.15,
  },
};

const PresenceState = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <motion.button
        className="m-3 bg-red-200 p-3"
        variants={buttonVariants}
        whileHover={"hover"}
        whileTap={"active"}
        onClick={() => setIsVisible((pre) => !pre)}
      >
        Toggle
      </motion.button>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="m-3 h-40 w-40 rounded bg-red-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileInView={{ x: [0, 100, 0] }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PresenceState;

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
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

  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 200], [0, 1]);

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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="m-3 h-40 w-40 rounded "
            initial={{ x: 0 }}
            animate={{
              x: 200,
              background: "red",
            }}
            exit={{ x: 0 }}
            style={{ x, opacity }}
            transition={{ default: { duration: 1 }, layout: { duration: 2 } }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PresenceState;

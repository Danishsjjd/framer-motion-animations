import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";

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
  const controls = useAnimation();

  return (
    <>
      <motion.button
        className="m-3 bg-red-200 p-3"
        variants={buttonVariants}
        whileHover={"hover"}
        whileTap={"active"}
        onClick={() => {
          setIsVisible((pre) => !pre);
          if (isVisible) {
            // animate(x, 200, {
            //   type: "spring",
            //   stiffness: 2000,
            // });
            controls.start({
              x: 200,
              backgroundColor: "#f00",
            });
          } else {
            // animate(x, 0, {
            //   type: "spring",
            //   stiffness: 2000,
            // });
            controls.start({
              x: 0,
              backgroundColor: "#0f0",
            });
          }
        }}
      >
        Toggle
      </motion.button>
      <AnimatePresence>
        {/* {isVisible && ( */}
        <motion.div
          className="m-3 h-40 w-40 rounded bg-red-700"
          initial={{ x: 0 }}
          // animate={{
          //   x: 200,
          // }}
          animate={controls}
          exit={{ x: 0 }}
          style={{ x, opacity }}
          transition={{ default: { duration: 1 }, layout: { duration: 2 } }}
        />
        {/* )} */}
      </AnimatePresence>
    </>
  );
};

export default PresenceState;

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const parentVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.8,
      staggerDirection: -1,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const AnimatedDots = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <AnimatePresence>
      <motion.span
        className="flex"
        initial="hidden"
        animate="visible"
        variants={parentVariants}
      >
        <motion.span variants={childVariants}>.</motion.span>
        <motion.span variants={childVariants}>.</motion.span>
        <motion.span variants={childVariants}>.</motion.span>
      </motion.span>
    </AnimatePresence>
  </>
);

export default AnimatedDots;

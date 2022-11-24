import { motion, useScroll, useSpring } from "framer-motion";
import HorizontalScroll from "../components/HorizontalScroll";
const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed top-0 h-4 w-screen origin-left bg-gradient-to-r from-purple-500 to-indigo-500"
        style={{ scaleX }}
      />
      <h3 className="text-4xl font-bold">Scroll</h3>
      <p>This Bar on the top is made with framer motion</p>
      <HorizontalScroll />
    </>
  );
};

export default Scroll;

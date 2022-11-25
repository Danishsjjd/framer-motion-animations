import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import HorizontalScroll from "../components/HorizontalScroll";
const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const container = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={container}>
      <h3 className="text-4xl font-bold">Scroll</h3>
      <p>This Bar on the top is made with framer motion</p>
      <motion.div
        className="fixed top-0 h-4 w-screen origin-left bg-gradient-to-r from-purple-500 to-indigo-500"
        style={{ scaleX }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="h-40 w-40 bg-red-400"
        viewport={{ root: container }}
      />
      <Item />
      <HorizontalScroll />
    </div>
  );
};

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section>
      <div
        ref={ref}
        className={`relative mx-auto h-40 w-40 rounded border-2 border-red-400`}
      >
        <figure className="progress">
          <svg
            id="progress"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="absolute -left-20 -rotate-90 fill-none"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-400 opacity-30 [stroke-width:15%]"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-600 [stroke-width:15%]"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default Scroll;

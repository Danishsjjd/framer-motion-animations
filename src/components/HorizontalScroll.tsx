import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  const scrollContainerRef = useRef<null | HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({ container: scrollContainerRef });

  return (
    <div>
      <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="-rotate-90 fill-none"
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
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <div className="mx-auto my-4 max-w-4xl rounded bg-cyan-900 p-2">
        <div
          className="flex gap-6 overflow-x-scroll p-6"
          ref={scrollContainerRef}
        >
          <VerticalDiv />
          <VerticalDiv />
          <VerticalDiv />
          <VerticalDiv />
          <VerticalDiv />
          <VerticalDiv />
          <VerticalDiv />
          <VerticalDiv />
        </div>
      </div>
    </div>
  );
};

const VerticalDiv = () => {
  return <div className="h-52 min-w-[10rem] bg-purple-100 shadow-xl" />;
};

export default HorizontalScroll;

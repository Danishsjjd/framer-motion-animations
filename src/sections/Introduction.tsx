import { useState } from "react";
import { motion } from "framer-motion";
import Range from "../components/Range";

const variants = {
  whileTap: { scale: 0.8, rotate: -90, borderRadius: "100%" },
  whileHover: { scale: 1.2, rotate: 90 },
};

const Introduction = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <>
      <div className="flex min-h-[50vh] w-screen items-center justify-center gap-16">
        <motion.div
          className="relative h-52 w-52 rounded-xl bg-neutral-200 shadow-2xl"
          // ! first
          variants={variants}
          animate={{ x, y, rotate }}
          // ! drag example work with both
          // whileHover={"whileHover"}
          // whileTap={"whileTap"}
          // drag="x"
          // dragConstraints={{ left: -100, right: 100 }}
          // onDrag={(event, info) => {
          //   // setX(info.point.x);
          //   // setY(info.point.y);
          //   console.log("top", event.view?.top);
          //   console.log("info.point", info.point);
          // }}
          // ! second
          // animate={{
          //   scale: [1, 2, 2, 1, 1],
          //   rotate: [0, 0, 270, 270, 0],
          //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          // }}
          // transition={{
          //   duration: 2,
          //   ease: "easeInOut",
          //   times: [0, 0.2, 0.5, 0.8, 1],
          //   repeat: Infinity,
          //   repeatDelay: 1,
          // }}
        ></motion.div>

        <div className="">
          <div>
            <Range range={x} setRange={setX}>
              X
            </Range>
            <Range range={y} setRange={setY}>
              Y
            </Range>
            <Range range={rotate} setRange={setRotate}>
              Rotate
            </Range>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

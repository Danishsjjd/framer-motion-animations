import { animate, motion, useMotionValue } from "framer-motion";
import Range from "../components/Range";

const variants = {
  whileTap: { scale: 0.8, rotate: -90, borderRadius: "100%" },
  whileHover: { scale: 1.2, rotate: 90 },
  whileDrag: { rotate: 0 },
};

const Introduction = () => {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const rotate = useMotionValue(0);

  return (
    <>
      <div className="flex min-h-[50vh] w-screen items-center justify-center gap-16">
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="relative h-52 w-52 rounded-xl bg-red-200 shadow-lg"
        ></motion.div>

        <motion.div
          className="relative grid h-52 w-52 place-items-center rounded-xl bg-neutral-200 text-xl shadow-2xl"
          variants={variants}
          whileTap="whileTap"
          // whileHover="whileHover"
          style={{ x, y, rotate }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          onDrag={(event, info) => {
            console.log("top", event.view?.top);
            console.log("info.point", info.point);
          }}
        >
          Text
        </motion.div>

        <div className="">
          <div>
            <Range range={x} animate="x">
              X
            </Range>
            <Range range={y} animate="y">
              Y
            </Range>
            <Range range={rotate} animate="rotate">
              Rotate
            </Range>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

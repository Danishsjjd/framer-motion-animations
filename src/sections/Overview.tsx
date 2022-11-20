import { useAnimation, motion, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Menu from "../components/Menu";
import PresenceState from "../components/PresenceState";

const Overview = () => {
  // const controls = useAnimation();
  const x = useMotionValue("0");

  let controls;
  useEffect(() => {
    // controls.start({
    //   x: "100%",
    //   backgroundColor: "#f00",
    //   transition: { duration: 3 },
    // });

    controls = animate(x, "100", {
      type: "spring",
      stiffness: 2000,
    });

    return controls.stop;
  }, []);

  return (
    <>
      <PresenceState />
      <Menu />
      <motion.div className="h-40 w-40 bg-blue-300" animate={controls} />
    </>
  );
};

export default Overview;

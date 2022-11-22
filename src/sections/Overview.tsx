import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Menu from "../components/Menu";
import PresenceState from "../components/PresenceState";

const Overview = () => {
  const x = useMotionValue("0");

  let controls;
  useEffect(() => {
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

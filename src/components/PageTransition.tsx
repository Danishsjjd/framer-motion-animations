import { useIsPresent, motion } from "framer-motion";

const PageTransition = ({ previousPath }: { previousPath?: string }) => {
  const isPresent = useIsPresent();

  const initial = previousPath === "/product" ? false : { scaleX: 1 };

  return (
    <motion.div
      initial={initial}
      animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
      exit={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circIn" },
      }}
      style={{ originX: isPresent ? 0 : 1 }}
      className={`fixed inset-0 z-20 bg-purple-700`}
    />
  );
};

export default PageTransition;

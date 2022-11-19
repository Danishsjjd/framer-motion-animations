import { motion } from "framer-motion";
const App = () => {
  return (
    <motion.div
      className="bg-red-400"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 10, type: "tween" }}
    >
      App
    </motion.div>
  );
};
export default App;

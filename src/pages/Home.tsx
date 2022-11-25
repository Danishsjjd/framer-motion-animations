import { motion } from "framer-motion";
import { Checkbox } from "../components/Checkbox";

import Transition from "../components/Transition";
import Introduction from "../sections/Introduction";
import Layout from "../sections/LayoutAnimation";
import MainPage from "../sections/MainPage";
import Overview from "../sections/Overview";
import Scroll from "../sections/Scroll";

const Home = () => {
  return (
    <motion.div exit={{}}>
      <h1 className="text-7xl font-bold">Main Page Animation's</h1>
      <MainPage />

      <div>
        <h1 className="text-7xl font-bold">Getting started</h1>
        <Introduction />
        <Checkbox />
      </div>

      <div>
        <h1 className="text-7xl font-bold">Animations</h1>
        <Overview />
        <Layout />
        <div>
          <h3 className="text-4xl font-bold">Gestures</h3>
          <p>
            in Gestures, we have while&#123;hover, focus, inView, Tap, darg,
            pan&#125;
          </p>
        </div>
        <Scroll />
        <Transition />
      </div>
    </motion.div>
  );
};
export default Home;

import { ReactNode, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import Example from "./sections/Example";
import Introduction from "./sections/Introduction";
import LayoutAnimation from "./sections/LayoutAnimation";
import Overview from "./sections/Overview";

const App = () => {
  return (
    <>
      {/* <div>
        <h1 className="text-7xl font-bold">Getting started</h1>
        <Introduction />
        <Example /> // todo: incomplete
      </div> */}

      <div>
        <h1 className="text-7xl font-bold">Animations</h1>
        <Overview />
        <LayoutAnimation />
      </div>
      <div>
        <ToggleContent
          header="this is going to be header"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum. Veritatis voluptates at aliquid, ut ea unde reprehenderit ex omnis?"
        />
        <ToggleContent
          header="2 is going to be header"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum. Veritatis voluptates at aliquid, ut ea unde reprehenderit ex omnis?"
        />
      </div>
    </>
  );
};
export default App;

function ToggleContent({
  header,
  content,
}: {
  header: ReactNode;
  content: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

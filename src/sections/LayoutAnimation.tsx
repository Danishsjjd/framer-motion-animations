import { LayoutGroup, motion } from "framer-motion";
import { ReactNode, useState } from "react";

import Switch from "../components/Switch";
import Todo from "../components/Todo";

const LayoutAnimation = () => {
  return (
    <>
      <h3 className="text-center text-4xl font-bold">Layout</h3>
      <Switch />
      <Todo />
      <LayoutGroup>
        <ToggleContent
          header="this is going to be header"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum. Veritatis voluptates at aliquid, ut ea unde reprehenderit ex omnis?"
        />
        <ToggleContent
          header="2 is going to be header"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum. Veritatis voluptates at aliquid, ut ea unde reprehenderit ex omnis?"
        />
      </LayoutGroup>
    </>
  );
};

function ToggleContent({
  header,
  content,
}: {
  header: ReactNode;
  content: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 5 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout>{header}</motion.h2>
      <div className="bg-purple-400">{isOpen ? content : null}</div>
    </motion.div>
  );
}

export default LayoutAnimation;

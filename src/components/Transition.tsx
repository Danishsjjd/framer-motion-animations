import { useState } from "react";

import { Checkbox } from "./Checkbox";
import Pointer from "./Pointer";

const Transition = () => {
  const [showPointer, setShowPointer] = useState(false);

  return (
    <>
      <h3 className="text-4xl font-bold">Transition</h3>
      <p>This spring cursor is made up with framer motion</p>
      <Checkbox isChecked={showPointer} setIsChecked={setShowPointer} />
      {showPointer && <Pointer />}
    </>
  );
};
export default Transition;

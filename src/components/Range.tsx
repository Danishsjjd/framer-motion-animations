import { MotionValue, animate } from "framer-motion";
import { ChangeEventHandler, ReactNode, useState } from "react";

type RangeProps = {
  children: ReactNode;
  range: MotionValue;
  animate: string;
};

function Range({ children, range }: RangeProps) {
  const [localRange, setLocalRange] = useState(() => range.get());

  range.on("change", (e) => {
    setLocalRange(e);
  });

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    animate(range, parseInt(e.target.value), {
      duration: 0.01,
      type: "spring",
    });
  };

  return (
    <label className="flex items-center justify-center bg-red-200">
      <span className="block w-20 text-center">{children}</span>

      <input
        type="range"
        className="h-6 w-full"
        onChange={onChangeHandler}
        value={localRange}
        min={-100}
      />
    </label>
  );
}

export default Range;

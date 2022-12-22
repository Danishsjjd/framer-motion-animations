import { MotionValue, animate } from "framer-motion";
import { ChangeEventHandler, ReactNode, useState } from "react";

type RangeProps = {
  // setRange: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  range: MotionValue;
  animate: string;
};

function Range({ children, range, animate: animateThisProperty }: RangeProps) {
  const [localRange, setLocalRange] = useState(() => range.get());

  range.onChange((e) => {
    setLocalRange(e);
  });

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    animate(range, parseInt(e.target.value), {
      duration: 0.5,
    });
  };

  return (
    <label className=" flex items-center justify-center bg-red-200">
      <span>{children}</span>

      <input
        type="range"
        className="h-6 w-full"
        onChange={onChangeHandler}
        value={localRange}
      />
    </label>
  );
}

export default Range;

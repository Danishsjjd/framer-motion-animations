import { Dispatch, ReactNode, SetStateAction } from "react";

type RangeProps = {
  setRange: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  range: number;
};

function Range({ children, setRange, range }: RangeProps) {
  return (
    <label
      htmlFor="customRange1"
      className=" flex items-center justify-center bg-red-200"
    >
      <span>{children}</span>

      <input
        type="range"
        className="
      h-6
      w-full
      appearance-none
      bg-red-800
      p-0
    "
        id="customRange1"
        onChange={(e) => setRange(parseInt(e.target.value))}
        value={range}
      />
    </label>
  );
}

export default Range;

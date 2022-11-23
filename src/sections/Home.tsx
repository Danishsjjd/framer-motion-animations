import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

type SelectedDayState = () => ReturnType<
  Dispatch<SetStateAction<number | null>>
>;

interface Day {
  day: number;
  id: string;
}

interface DateBtnProps {
  day: number;
  selectedDay: number | null;
  onExpand: SelectedDayState;
  onCollapse: SelectedDayState;
}

interface BtnHolderProps {
  children: ReactNode;
}

const Home = () => {
  const days: Day[] = [
    { day: 32, id: "32" },
    { day: 2, id: "2" },
    { day: 3, id: "3" },
    { day: 48, id: "48" },
  ];
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const MotionDateBtn = motion(DateButton);
  return (
    <div>
      {days.map((day) => (
        <MotionDateBtn
          layoutId={day.id}
          key={day.id}
          day={day.day}
          selectedDay={selectedDay}
          onExpand={() => setSelectedDay(day.day)}
          onCollapse={() => setSelectedDay(null)}
        />
      ))}
    </div>
  );
};

function DateButton({ day, selectedDay, onCollapse, onExpand }: DateBtnProps) {
  return (
    <>
      <div className="">{day}</div>

      <AnimatePresence>
        {selectedDay && <div className="">{day}</div>}
      </AnimatePresence>
    </>
  );
}

export default Home;

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import landScape from "../assets/images/landscape.jpg";
import Introduction from "./Introduction";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Introduction />
      <SmallCards />
      <motion.img
        alt="product"
        src={landScape}
        layoutId={"product"}
        width={400}
        className="mx-auto cursor-pointer"
        onClick={() => navigate("/product")}
      />
    </>
  );
};

const SmallCards = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const days: number[] = [1, 53, 20, 65];

  return (
    <div className="relative my-5 flex items-center justify-center gap-3">
      {days.map((day) => {
        return (
          <motion.div
            className="rounded bg-red-400 p-2 text-xl"
            layoutId={`${day}`}
            onClick={() => setSelectedId(day)}
            key={day}
          >
            {day}
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-10 grid cursor-pointer place-items-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="h-96 w-96 rounded-lg bg-red-400 p-3 text-2xl font-medium text-white"
              layoutId={`${selectedId}`}
              onClick={() => setSelectedId(null)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
              dolorum quas enim nostrum quisquam quidem at ullam quo sit!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainPage;

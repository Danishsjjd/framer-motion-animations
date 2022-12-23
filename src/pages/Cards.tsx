import { useParams } from "react-router-dom";

import PageTransition from "../components/PageTransition";
import { cards } from "../constants/card";
import SingleCard from "./Card";

const Cards = () => {
  const params = useParams();

  return (
    <div className="min-h-screen min-w-[100vw] bg-black text-white">
      <header className="mx-auto  flex max-w-5xl items-center justify-between border-b border-b-zinc-400 pt-8 pb-4">
        <div>
          <p className="text-xl font-medium text-zinc-400">
            Monday, December 39<sup>th</sup>
          </p>
          <h3 className="text-3xl font-bold">Today</h3>
        </div>
        <div>
          <img
            src="http://source.unsplash.com/random"
            alt="random image"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
      </header>
      <ul className="mx-auto grid max-w-5xl grid-cols-3 gap-3 py-7">
        {cards.map((card) => {
          return (
            <SingleCard
              {...card}
              key={card.id}
              isSelected={params.id === card.id}
            />
          );
        })}
      </ul>
      <PageTransition />
    </div>
  );
};

export default Cards;

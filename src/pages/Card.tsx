import { motion } from "framer-motion";

import { Card } from "../constants/card";

interface Props extends Card {
  isSelected: boolean;
}

function SingleCard({ description, img, title, isSelected }: Props) {
  return (
    <motion.li
      className={`relative h-96 overflow-hidden rounded-lg outline outline-2 outline-white/0 transition-all duration-300 before:bg-[image:var(--image-url)] focus-within:outline-offset-2 focus-within:outline-gray-300 hover:outline-offset-2 hover:outline-gray-300`}
    >
      <img
        src={img}
        alt="Project's"
        className="h-full w-full bg-top object-cover object-top"
      />
    </motion.li>
  );
}

export default SingleCard;

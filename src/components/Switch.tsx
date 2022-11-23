import { motion } from "framer-motion";
import { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div
        className={`my-10 mx-auto flex h-20 w-40 cursor-pointer items-center rounded-full bg-red-400 px-2 ${
          isOn ? " justify-end" : "justify-start"
        }`}
        onClick={() => setIsOn((pre) => !pre)}
      >
        <motion.div
          className="h-14 w-14 rounded-full bg-red-800"
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          layout
        />
      </div>
      <motion.div
        initial={false}
        animate={isOn ? "in" : "out"}
        variants={{
          in: { height: "auto" },
          out: { height: "0px" },
        }}
        className={`overflow-hidden rounded bg-red-800`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, alias!
        Placeat veritatis quos laudantium temporibus neque eveniet provident
        repellat iure consequatur ratione recusandae saepe, nesciunt, ex nam!
        Placeat odio corrupti possimus quam aliquid aspernatur aperiam
        voluptatum quae fugit incidunt labore, itaque sint sed quod laboriosam
        quibusdam molestiae, blanditiis architecto dignissimos iure ut. Quia
        sunt tempora impedit corrupti omnis obcaecati dicta aut, voluptas, earum
      </motion.div>
    </>
  );
};

export default Switch;

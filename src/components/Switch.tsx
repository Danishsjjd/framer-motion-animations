import { motion } from "framer-motion";
import { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div className="h-[500px] w-[300px] overflow-scroll bg-red-900">
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          blanditiis impedit dolore saepe mollitia alias quae minima quibusdam
          animi, commodi obcaecati enim quisquam porro aliquid? Aliquid illo
          fugit incidunt esse asperiores architecto distinctio quibusdam
          doloremque odio consectetur! Corrupti a vitae expedita. Repudiandae
          adipisci veniam nisi quos, mollitia ducimus ab vero unde quod nostrum
          velit labore molestiae dignissimos iusto nam temporibus quas eum ullam
          totam soluta odit tenetur! Pariatur sed aspernatur, consectetur eum
          illo asperiores veritatis obcaecati explicabo vitae architecto nam
          adipisci porro vel voluptatum rem commodi? Deleniti, iure tempora
          laudantium ut quia, voluptatibus dolores hic odio ex, expedita error
          id?
        </div>
      </div>
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

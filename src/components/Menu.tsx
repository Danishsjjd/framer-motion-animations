import { motion, Variants } from "framer-motion";
import { useState } from "react";

const lis = [1, 2, 3, 4, 5];

const ItemVariants: Variants = {
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.3 },
  }),
  closed: (i) => ({
    opacity: 0,
    y: 20,
    transition: { duration: 1, delay: i * 0.3 },
  }),
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen w-screen bg-gradient-to-t from-indigo-700 to-purple-700 text-purple-700 ">
      <div className="absolute top-40 left-40 w-56">
        <motion.nav
          className="w-full space-y-2 [&_*]:bg-white [&>*]:w-full  [&>*]:rounded"
          animate={isOpen ? "open" : "closed"}
          initial={false}
        >
          <motion.button
            className="py-2 pl-2 text-left"
            onClick={() => setIsOpen((pre) => !pre)}
            whileTap={{ scale: 0.97 }}
          >
            Menu
          </motion.button>
          <motion.ul
            className="overflow-hidden rounded-lg bg-white"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(5% 0% 95% 100% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                  when: "afterChildren",
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {lis.map((li, i) => (
              <motion.li
                key={li}
                className="py-2 pl-2"
                variants={ItemVariants}
                custom={i}
              >
                items {li}
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Menu;

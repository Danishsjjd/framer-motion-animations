import { ReactNode, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, Variants, usePresence } from "framer-motion";

const Header = () => {
  return (
    <header className="border-b border-b-zinc-500 bg-zinc-700 p-6 text-gray-200">
      <NavBar>
        <Item icon={"😁"} />
        <Item icon={"😁"} />
        <Item icon={"😁"} />
        <Item icon={"💖"}>
          <DropDownMenu />
        </Item>
      </NavBar>
    </header>
  );
};

const DropDownMenu = () => {
  const [isPresent, safeToRemove] = usePresence();

  const [activeMenu, setActiveMenu] = useState("menu");
  const [height, setHeight] = useState(100);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const settingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let time: null | number;
    if (!isPresent) time = setTimeout(safeToRemove, 1000);
    return () => {
      if (time) clearTimeout(time);
    };
  }, [isPresent]);

  const mainVariants: Variants = {
    show: {
      translateX: "0%",
      position: "absolute",
    },
    hidden: {
      translateX: "-110%",
      position: "absolute",
    },
  };

  const settingsVariants: Variants = {
    show: {
      ...mainVariants.show,
    },
    hidden: {
      translateX: "110%",
      position: "absolute",
    },
  };

  const dropdownVariants: Variants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="absolute right-0 top-16 w-80 overflow-hidden rounded-xl border-zinc-500 bg-zinc-600 p-4 text-zinc-300 transition-all duration-500"
      style={{ height: height + 30 }}
      variants={dropdownVariants}
      initial="initial"
      animate="animate"
      exit={"initial"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {activeMenu === "menu" && (
          <motion.div
            variants={mainVariants}
            initial={"hidden"}
            animate={"show"}
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="top-4 left-4 right-4"
            ref={menuRef}
            onViewportEnter={(el) => {
              if (el?.boundingClientRect)
                setHeight(el?.boundingClientRect?.height);
            }}
          >
            <ul className="w-full">
              <DropDownItem>👤 My Profile</DropDownItem>
              <DropDownItem onClick={() => setActiveMenu("settings")}>
                🪐 Setting
              </DropDownItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activeMenu === "settings" && (
          <motion.div
            variants={settingsVariants}
            initial="hidden"
            animate={"show"}
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="top-4 left-4 right-4"
            ref={settingRef}
            onViewportEnter={(el) => {
              if (el?.boundingClientRect)
                setHeight(el?.boundingClientRect?.height);
            }}
          >
            <ul className="w-full">
              <DropDownItem onClick={() => setActiveMenu("menu")}>
                New Menu
              </DropDownItem>
              <DropDownItem>New Item</DropDownItem>
              <DropDownItem>New People</DropDownItem>
              <DropDownItem>New Things</DropDownItem>
              <DropDownItem>New Things</DropDownItem>
              <DropDownItem>New Things</DropDownItem>
              <DropDownItem>New Things</DropDownItem>
              <DropDownItem>New Things</DropDownItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DropDownItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: Function;
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`icon-container relative`}
    >
      <span>{children}</span>
    </div>
  );
};

const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-3">{children}</ul>
    </nav>
  );
};

const Item = ({
  children,
  icon,
}: {
  children?: ReactNode;
  icon: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={`icon-container relative`}>
      <a
        href="#"
        onClick={() => {
          setIsOpen((pre) => !pre);
        }}
      >
        {icon}
      </a>
      <AnimatePresence mode="wait">{isOpen && children}</AnimatePresence>
    </li>
  );
};

export default Header;

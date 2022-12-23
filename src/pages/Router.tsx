import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import usePrevious from "../hooks/usePrevious";

import Cards from "./Cards";
import Home from "./Home";
import Product from "./Product";
import Transition from "./Transition";

const Router = () => {
  const location = useLocation();

  let pathname;
  if (location.pathname === "/" || location.pathname === "/product")
    pathname = "default";
  else pathname = location.pathname;

  const preserveState = usePrevious(location.pathname);

  console.log(preserveState);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Home previousPath={preserveState} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<Cards />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;

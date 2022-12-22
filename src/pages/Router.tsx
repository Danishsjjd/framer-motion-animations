import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Cards from "./Cards";
import Home from "./Home";
import Product from "./Product";
import Transition from "./Transition";

const Router = () => {
  const location = useLocation();

  const pathname =
    location.pathname === "/" || location.pathname === "/product"
      ? "default"
      : location.pathname;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;

import { AnimatePresence } from "framer-motion";
import { useId } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import Transition from "./Transition";

const Router = () => {
  const id = useId();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/transition" element={<Transition />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;

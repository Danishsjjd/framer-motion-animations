import { AnimatePresence } from "framer-motion";
import { useId } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";

const Router = () => {
  const id = useId();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;

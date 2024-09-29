import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Restaurant } from "./pages/restaurant";
import { Attraction } from "./pages/attraction";
import Navbar from "./components/navbar";
import { AttractionList } from "./pages/attraction-list";
import { RestaurantList } from "./pages/restaurant-list";
import { AnimatePresence } from "framer-motion";

export function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/attractions" element={<AttractionList />} />
          <Route path="/attraction/:id" element={<Attraction />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

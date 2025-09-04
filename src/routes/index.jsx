import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
          <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

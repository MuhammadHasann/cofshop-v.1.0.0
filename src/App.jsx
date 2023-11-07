import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenusPage from "./pages/MenusPage";
import LocationPage from "./pages/LocationPage";
import NavMenuItems from "./layouts/header/NavMenuItems";
import FooterSection from "./layouts/footer/FooterSection";

const App = () => {
  return (
    <div className="app">
      <NavMenuItems />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:category" element={<MenusPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
      <FooterSection />
    </div>
  );
};

export default App;

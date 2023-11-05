import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Location from "./pages/location";
import Navbar from "./components/nav";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

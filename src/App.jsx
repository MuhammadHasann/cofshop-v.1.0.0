import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Location from "./pages/location";
import Navbar from "./components/nav";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <div id="category" className="w-full h-[200vh] bg-sky-200">
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default App;

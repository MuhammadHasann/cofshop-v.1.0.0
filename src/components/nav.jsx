import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  return (
    <header className="py-2 w-full bg-white">
      <div className="container">
        <section className="flex justify-between items-center w-full">
          <Logo direction={"gap-2"} logo={"w-6 fill-primary md:w-9"} textLogo={"text-base font-extrabold text-dark md:text-xl"} />

          <button className="cursor-pointer flex flex-col items-end gap-1 md:hidden" onClick={() => setActive(true)}>
            <span className="w-6 h-[2px] bg-dark rounded-full"></span>
            <span className="w-5 h-[2px] bg-dark rounded-full"></span>
          </button>

          <nav className={`fixed top-0 left-0 hidden justify-between p-10 w-full h-full bg-white z-50 ${active ? "nav-menu" : ""} md:static md:block md:p-0 md:w-fit md:bg-transparent md:z-0`}>
            <ul className="flex flex-col gap-12 opacity-0 transition-all duration-300 ease-in-out delay-500 md:flex-row md:items-center md:opacity-100">
              <li className="group">
                <Link
                  to="/"
                  className={`text-xs font-medium text-white flex transition duration-300 ease-in-out group-hover:text-dark after:scale-0 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-primary after:rounded-full after:transition after:duration-300 after:ease-in-out md:relative md:text-dark md:hover:after:scale-100 md:group-hover:text-primary md:group-hover:font-semibold ${
                    location.pathname === "/" ? "md:text-primary md:after:scale-110" : ""
                  }`}
                  onClick={() => setActive(false)}
                >
                  Home
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/menu"
                  className={`text-xs font-medium text-white flex transition duration-300 ease-in-out group-hover:text-dark after:scale-0 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-primary after:rounded-full after:transition after:duration-300 after:ease-in-out md:relative md:text-dark md:hover:after:scale-100 md:group-hover:text-primary md:group-hover:font-semibold ${
                    location.pathname === "/menu" ? "md:text-primary md:after:scale-110" : ""
                  }`}
                  onClick={() => setActive(false)}
                >
                  Menu
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/location"
                  className={`text-xs font-medium text-white flex gap-1 transition duration-300 ease-in-out group-hover:text-dark md:flex md:text-dark md:items-center md:group-hover:text-primary md:group-hover:font-semibold
                  ${location.pathname === "/location" ? "md:text-primary" : ""}`}
                  onClick={() => setActive(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 md:fill-primary md:w-6 md:h-6">
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Find Store
                </Link>
              </li>
            </ul>

            <Logo direction={"flex-col md:hidden"} logo={"w-10 fill-white"} textLogo={"text-base font-extrabold text-white"} />

            <button
              className="cursor-pointer absolute -bottom-full left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-3xl font-medium text-white text-center rounded-full ring-1 ring-white button-close md:hidden"
              onClick={() => setActive(false)}
            >
              &#215;
            </button>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Navbar;

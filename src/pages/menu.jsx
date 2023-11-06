/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import Banner from "../components/banner";
import Catalog from "../components/catalog";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState([]);
  const params = useParams();

  const handleClick = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.getAttribute("href")) {
      const targetId = target.getAttribute("href").substring(1);

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getMenus = async () => {
    try {
      let response = "";
      response = await fetch("/assets/data/menu.json");
      const data = await response.json();

      setMenus(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMenus();
  }, []);

  useEffect(() => {
    if (menus.length > 0) {
      if (params.category === "popular") {
        setProduct(menus.sort((a, b) => b.rate - a.rate).slice(0, 8));
        setTitle("Popular");
      }
      if (params.category === "hot-coffee") {
        setProduct(menus.filter((menu) => menu.category === "Hot Coffee"));
        setTitle("Hot Coffee");
      }
      if (params.category === "cold-coffee") {
        setProduct(menus.filter((menu) => menu.category === "Cold Coffee"));
        setTitle("Cold Coffee");
      }
      if (params.category === "teas") {
        setProduct(menus.filter((menu) => menu.category === "Teas"));
        setTitle("Teas");
      }
      if (params.category === "iced-tea") {
        setProduct(menus.filter((menu) => menu.category === "Iced Tea"));
        setTitle("Iced Tea");
      }
      if (params.category === "drinks") {
        setProduct(menus.filter((menu) => menu.category === "Drinks"));
        setTitle("Drinks");
      }
      if (params.category === "food") {
        setProduct(menus.filter((menu) => menu.category === "Food"));
        setTitle("Food");
      }
    }
  }, [menus, params.category]);

  return (
    <>
      <section className="py-5 w-full bg-white lg:py-8">
        <div className="container">
          <Banner
            heading="Have you had Coffee today?"
            paragraph="A sunny morning begins with the fresh aroma of a cup of coffee. Have you felt the warmth of coffee today? At Cofshop, we provide an unforgettable coffee experience. Come join us and enjoy every sip of coffee bliss. Choose from our menu below!"
            classBanner="flex-wrap-reverse w-full h-fit hidden md:flex"
            classText="gap-2 p-8 w-full h-fit bg-[#9A7B5A] text-dark md:w-1/2 md:h-60 lg:gap-5 lg:h-80"
            classHeading="w-3/4 text-2xl font-bold lg:text-4xl"
            classParagraph="flex-1 text-xxs lg:text-xs"
            classImage="relative w-full h-52 bg-[url('/assets/image/resource/menu-banner.jpg')] md:w-1/2 md:h-60 lg:h-80"
          >
            <a
              href="#catalog"
              className="ccursor-pointer flex items-center py-1 px-3 w-fit bg-transparent text-xxs font-semibold border border-dark rounded-full transition duration-300 ease-in-out group hover:bg-white hover:bg-opacity-10 lg:px-4 lg:text-xs"
              onClick={handleClick}
            >
              See menu
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition duration-300 ease-in-out lg:w-5 lg:h-5 group-hover:rotate-90">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </a>
          </Banner>
          <h1 className="w-1/2 text-xl font-bold text-dark md:hidden">Have you had Coffee today?</h1>
        </div>
      </section>
      <section className="py-2 w-full bg-white lg:py-5">
        <div className="container">
          <div className="flex items-center flex-wrap gap-1 md:gap-3">
            <Link
              to="/menu/popular"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "popular" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Popular
            </Link>
            <Link
              to="/menu/hot-coffee"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "hot-coffee" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Hot Coffee
            </Link>
            <Link
              to="/menu/cold-coffee"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "cold-coffee" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Cold Coffee
            </Link>
            <Link
              to="/menu/teas"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "teas" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Teas
            </Link>
            <Link
              to="/menu/iced-tea"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "iced-tea" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Iced Tea
            </Link>
            <Link
              to="/menu/drinks"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "drinks" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Drinks
            </Link>
            <Link
              to="/menu/food"
              className={`cursor-pointer py-1 px-3 text-xxs rounded-full transition-all duration-300 ease-in-out lg:py-2 lg:px-5 lg:text-xs hover:bg-primary hover:text-white ${
                params.category === "food" ? "bg-primary text-white" : "bg-transparent text-dark"
              }`}
            >
              Food
            </Link>
          </div>
        </div>
      </section>
      <Catalog arrows="hidden" datas={product} padding="pt-4 pb-14 md:pt-6 md:pb-20" title={title} />
    </>
  );
};

export default Menu;

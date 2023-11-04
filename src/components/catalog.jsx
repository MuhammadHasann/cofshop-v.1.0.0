/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Product from "./product";
import Slider from "react-slick";

const Catalog = () => {
  const [menus, setMenus] = useState([]);
  const [popular, setPopular] = useState([]);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
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
      const sortData = menus.sort((a, b) => b.rate - a.rate);
      setPopular(sortData.slice(0, 8));
    }
  }, [menus]);

  return (
    <section className="py-10 w-full bg-white">
      <div className="container">
        <div className="col-span-full flex justify-between items-center mb-3 md:mb-5 lg:mb-7">
          <h1 className="text-sm font-bold text-dark lg:text-base">Popular Menu</h1>
          <div className="flex gap-3">
            <button className="cursor-pointer p-[2px] bg-white rounded-full ring-1 ring-black lg:p-1 lg:ring-2 transition-all duration-300 ease-in-out hover:scale-[0.95]" onClick={previous}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 xl:w-6 xl:h-6">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="cursor-pointer p-[2px] bg-white rounded-full ring-1 ring-black lg:p-1 lg:ring-2 transition-all duration-300 ease-in-out hover:scale-[0.95]" onClick={next}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 xl:w-6 xl:h-6">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className="py-3">
          {popular.map((menu) => (
            <Product key={menu.id} image={menu.src} name={menu.name} price={menu.price} rate={menu.rate} width="mx-auto w-40 lg:w-52 xl:w-[264px]" />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Catalog;

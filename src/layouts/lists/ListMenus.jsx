/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import MenuCardItem from "../../components/cards/MenuCardItem";
import Slider from "react-slick";

const Catalog = ({ arrows, settings2, datas, padding, title }) => {
  arrows = arrows || "flex";
  padding = padding || "py-10 md:py-20";
  title = title || "Popular Menu";

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="catalog" className={`${padding} w-full bg-white`}>
      <div className="container">
        <div className="col-span-full flex justify-between items-center mb-3 md:mb-5 lg:mb-7">
          <h1 className="text-sm font-bold text-dark lg:text-base">{title}</h1>
          <div className={`${arrows} gap-3`}>
            <button className="cursor-pointer p-[2px] bg-white rounded-full ring-1 ring-dark lg:p-1 lg:ring-2 transition-all duration-300 ease-in-out hover:scale-[0.95]" onClick={previous}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-dark xl:w-6 xl:h-6">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="cursor-pointer p-[2px] bg-white rounded-full ring-1 ring-dark lg:p-1 lg:ring-2 transition-all duration-300 ease-in-out hover:scale-[0.95]" onClick={next}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-dark xl:w-6 xl:h-6">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {location.pathname === "/" ? (
          <Slider ref={sliderRef} {...settings2} className="py-3">
            {datas.map((menu) => (
              <MenuCardItem key={menu.id} image={menu.src} name={menu.name} price={menu.price} rate={menu.rate} width="mx-auto w-40 lg:w-52 xl:w-[264px]" />
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-12">
            {datas.map((menu) => (
              <MenuCardItem key={menu.id} image={menu.src} name={menu.name} price={menu.price} rate={menu.rate} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;

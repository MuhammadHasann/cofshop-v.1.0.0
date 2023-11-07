/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Slider from "react-slick";

const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
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

  const getGallerys = async () => {
    try {
      let response = "";
      response = await fetch("/assets/data/gallery.json");
      const data = await response.json();

      setGallerys(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGallerys();
  }, []);

  return (
    <section className="relative py-3 w-full bg-white before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/3 before:bg-dark md:before:h-1/2">
      <div className="container">
        <div className="flex flex-col justify-center items-start gap-2 mb-8 md:gap-3 md:mb-10 lg:gap-4 lg:mb-12">
          <h1 className="text-sm font-bold text-dark lg:text-base">Gallery</h1>
          <h2 className="text-2xl font-bold text-dark font-bakbak-one leading-none md:text-4xl lg:text-5xl">
            These are some photos about our <span className="text-primary">Coffee</span> shop
          </h2>
        </div>
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          {gallerys.map((data) => (
            <div key={data.id}>
              <div className="p-2 mx-auto w-fit bg-white shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)]">
                <img src={data.src} alt="Gallery Image" className="mx-auto w-36 h-28 object-cover sm:w-48 sm:h-36" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:flex md:flex-col md:gap-5 lg:gap-7">
        <Slider {...settings}>
          {gallerys
            .filter((_, i) => i < 10)
            .map((data) => (
              <div key={data.id}>
                <div className="md:p-3 md:mx-auto md:w-fit md:bg-white md:shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)]">
                  <img src={data.src} alt="Gallery Image" className="md:mx-auto md:w-56 md:h-44 md:object-cover lg:w-72 lg:h-56" />
                </div>
              </div>
            ))}
        </Slider>
        <Slider {...settings} rtl={true}>
          {gallerys
            .filter((_, i) => i > 10)
            .map((data) => (
              <div key={data.id}>
                <div className="md:p-3 md:mx-auto md:w-fit md:bg-white md:shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)]">
                  <img src={data.src} alt="Gallery Image" className="md:mx-auto md:w-56 md:h-44 md:object-cover lg:w-72 lg:h-56" />
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;

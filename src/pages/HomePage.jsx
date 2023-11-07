/* eslint-disable react-hooks/exhaustive-deps */
import BannerShop from "../components/banner/BannerShop";
import ProductCategoryView from "../layouts/lists/ProductCategoryView";
import HeaderHeroBanner from "../layouts/header/HeaderHeroBanner";
import ListMenus from "../layouts/lists/ListMenus";
import UserFeedbackList from "../layouts/lists/UserFeedbackList";
import UserReviewsGallery from "../layouts/lists/UserReviewsGallery";
import { useEffect, useState } from "react";

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [popular, setPopular] = useState([]);

  const settings2 = {
    arrows: false,
    dots: false,
    infinite: true,
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
    <>
      <HeaderHeroBanner />
      <ProductCategoryView />
      <section className="py-5 w-full bg-white">
        <div className="container">
          <BannerShop
            heading="Start your day with Coffee"
            paragraph="Starting the day with full enthusiasm is the key to a successful day.
            Here, we believe that a delicious cup of coffee is the best way to start your morning."
            classBanner="flex-wrap-reverse w-full h-fit"
            classText="justify-center items-center gap-2 p-10 w-full h-fit bg-primary text-white text-center md:w-1/2 md:h-60 lg:gap-5 lg:h-80"
            classHeading="w-3/4 text-2xl font-bold lg:w-1/2 lg:text-4xl"
            classParagraph="flex-none text-xxs lg:text-xs"
            classImage="relative w-full h-52 bg-[url('/assets/image/resource/tagline-banner.jpg')] after:content-[''] after:bg-[url('/assets/image/resource/coffe-hand.jpg')] after:bg-cover after:bg-center after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:w-52 after:h-40 after:rounded md:w-1/2 md:h-60 lg:h-80 lg:after:w-80 lg:after:h-60"
          />
        </div>
      </section>
      <ListMenus settings2={settings2} datas={popular} />
      <section className="py-5 w-full">
        <div className="container">
          <BannerShop
            classBanner="relative"
            classText="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 justify-center items-center text-xxs text-white z-10 md:gap-1 md:right-0 md:translate-x-0 lg:text-xs"
            classHeading="hidden"
            classParagraph="hidden"
            classImage="relative w-full h-44 bg-[url('/assets/image/resource/quote-banner.jpg')] after:content-[''] after:bg-black after:bg-opacity-50 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-full md:h-56 lg:h-72 xl:h-80"
          >
            <span className="inline-block w-52 h-4 text-2xl font-bold md:w-72 md:h-5 md:text-4xl">&#8243;</span>
            <div className="w-44 h-fit md:w-64">
              <p>Hidup dapat diibaratkan seperti minum kopi suguhan. Terkadang, kita akan mendapatkan rasa pahit, terkadang kita juga mendapatkan rasa manis.</p>
              <br />
              <p>Namun, hal itu akan membuat mata kita menjadi terbuka.</p>
            </div>
            <span className="inline-block w-52 h-4 text-2xl font-bold md:w-72 text-end md:h-5 md:text-4xl">&#8243;</span>
          </BannerShop>
        </div>
      </section>
      <UserFeedbackList />
      <UserReviewsGallery />
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import UserFeedbackCard from "../../components/cards/UserFeedbackCard";
import Slider from "react-slick";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
    customPaging: () => <div className="relative mt-4 w-4 h-1 bg-gray-400 rounded-full md:mt-6 lg:mt-8 lg:h-[6px]"></div>,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 3,
        },
      },
    ],
  };

  const getReviews = async () => {
    try {
      let response = "";
      response = await fetch("/assets/data/review.json");
      const data = await response.json();

      setReviews(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section className="pt-10 pb-20 w-full lg:pt-14 lg:pb-24">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2 mb-8 md:gap-3 md:mb-10 lg:gap-4 lg:mb-12">
          <h1 className="text-sm font-bold text-dark lg:text-base">TESTIMONIAL</h1>
          <h2 className="text-2xl font-bold text-dark text-center font-bakbak-one leading-none md:text-4xl lg:text-5xl">
            Word from <br className="md:hidden" /> our <span className="text-primary">Customers</span>
          </h2>
        </div>
        <Slider {...settings}>
          {reviews.map((data) => (
            <UserFeedbackCard key={data.id} name={data.name} review={data.review} rating={data.rate} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;

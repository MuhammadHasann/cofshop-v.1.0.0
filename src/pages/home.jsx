/* eslint-disable react-hooks/exhaustive-deps */
import Banner from "../components/banner";
import Categories from "../components/categories";
import Hero from "../components/hero";
import Catalog from "../components/catalog";
import Testimonial from "../components/testimonial";
import Gallery from "../components/gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <section className="py-5 w-full bg-white">
        <div className="container">
          <Banner
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
      <Catalog />
      <section className="py-5 w-full">
        <div className="container">
          <Banner
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
          </Banner>
        </div>
      </section>
      <Testimonial />
      <Gallery />
    </>
  );
};

export default Home;

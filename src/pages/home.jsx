/* eslint-disable react-hooks/exhaustive-deps */
import Categories from "../components/categories";
import Hero from "../components/hero";

const Home = () => {
  return (
    <>
      <span className="lg:w-1/2"></span>
      <Hero />
      <Categories />
    </>
  );
};

export default Home;

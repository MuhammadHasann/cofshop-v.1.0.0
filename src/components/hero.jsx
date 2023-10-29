import promotion from "/assets/image/product/product (hero).png";

const Hero = () => {
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

  return (
    <section id="hero" className="w-full bg-white">
      <div className="container">
        <div className="relative flex justify-center py-14 w-full">
          <div className="relative z-10">
            <h1 className={`absolute top-0 left-1/2 -translate-x-1/2 text-5xl font-black text-primary text-center leading-10 tracking-wider md:text-6xl lg:text-7xl`}>
              COFFE <br />
              SHOP
            </h1>
            <img src={promotion} alt="Hero Image" className="relative w-80 z-10 md:w-[400px] lg:w-[440px]" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-fit h-fit">
            <h1 className="text-5xl font-black text-white tracking-widest drop-shadow-[0_0_4px_rgba(0,0,0,0.15)] md:text-8xl lg:text-9xl md:tracking-[0.15em] md:drop-shadow-[0_0_8px_rgba(0,0,0,0.15)]">COFSHOP</h1>
          </div>
          <div className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-end items-center gap-6 w-5 h-24 transition duration-300 ease-in-out z-20 md:gap-8 md:h-28">
            <a href="#category" className="cursor-pointer absolute top-0 left-0 w-full h-full z-30" onClick={handleClick}></a>
            <p className="w-14 text-xxs font-medium text-dark transform rotate-90 md:w-[72px] md:text-xs">scroll down</p>
            <span className="p-1 bg-primary rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 fill-white md:w-4 md:h-4">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import BannerShop from "../components/banner/BannerShop";

const Location = () => {
  return (
    <>
      <section className="py-5 w-full bg-white lg:py-8">
        <div className="container">
          <BannerShop
            heading="Visit our coffee shop soon!"
            paragraph="It's time to experience coffee in a different way. Visit our coffee shop and expert touch of our baristas, every visit to our shop is an opportunity to explore unforgettable coffee flavors. Come join and discover the true pleasure of coffee."
            classBanner="flex-wrap-reverse w-full h-fit hidden md:flex"
            classText="justify-center gap-2 p-10 w-full h-fit bg-orange-400 text-white md:w-1/2 md:h-60 lg:gap-5 lg:h-80"
            classHeading="w-3/4 text-2xl font-bold lg:text-4xl"
            classParagraph="flex-none text-xxs lg:text-xs"
            classImage="relative w-full h-52 bg-[url('/assets/image/resource/location-banner.jpg')] md:w-1/2 md:h-60 lg:h-80"
          ></BannerShop>
          <h1 className="w-1/2 text-xl font-bold text-dark md:hidden">Visit our coffee shop soon!</h1>
        </div>
      </section>
      <section className="py-3 w-full bg-white md:pt-8 md:pb-14 lg:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:gap-20">
            <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:justify-between md:items-center lg:gap-6">
              <p className="text-xxs font-semibold text-dark lg:text-xs">1500 Broadway, New York, NY 10036, Amerika Serikat</p>
              <a
                href="https://www.google.com/maps/dir//Starbucks,+1500+Broadway,+New+York,+NY+10036,+Amerika+Serikat/@40.756698,-73.9884679,17z/data=!3m1!5s0x89c2586301476d15:0x1c5de4ddd50bcbe9!4m8!4m7!1m0!1m5!1m1!1s0x89c258552071bcb3:0x5cc7129cc313de1a!2m2!1d-73.985893!2d40.756694?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 mb-3 w-fit bg-primary text-xxs font-semibold text-white rounded transition-all duration-300 ease-in-out lg:mb-0 lg:text-xs hover:bg-opacity-80"
              >
                Get Direction
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2421721791575!2d-73.98846792477786!3d40.756698034879285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258552071bcb3%3A0x5cc7129cc313de1a!2sStarbucks!5e0!3m2!1sid!2sid!4v1699248242612!5m2!1sid!2sid"
                className="w-full h-48 rounded shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)] md:h-60 lg:h-80"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:justify-between md:items-center lg:gap-6">
              <p className="text-xxs font-semibold text-dark lg:text-xs">Birmingham Rd, West Bromwich B71 4JH, Inggris Raya</p>
              <a
                href="https://www.google.com/maps/dir//Starbucks,+Birmingham+Rd,+West+Bromwich+B71+4JH,+Inggris+Raya/@52.5106834,-1.9695448,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4870bd4dd4042965:0xe4e121058a066d21!2m2!1d-1.9669699!2d52.5106802?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 mb-3 w-fit bg-primary text-xxs font-semibold text-white rounded transition-all duration-300 ease-in-out lg:mb-0 lg:text-xs hover:bg-opacity-80"
              >
                Get Direction
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.257247825697!2d-1.9695448240316635!3d52.510683436920175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd4dd4042965%3A0xe4e121058a066d21!2sStarbucks!5e0!3m2!1sid!2sid!4v1699248808720!5m2!1sid!2sid"
                className="w-full h-48 rounded shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)] md:h-60 lg:h-80"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

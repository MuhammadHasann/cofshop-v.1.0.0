import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="pt-16 pb-5 w-full bg-dark md:pt-28 md:pb-8">
      <div className="container">
        <div className="flex flex-wrap items-start gap-8 md:gap-0">
          <div className="flex flex-wrap gap-y-3 w-full md:pr-4 md:w-1/3 lg:gap-y-5 lg:pr-14 xl:pr-24">
            <h1 className="mb-2 w-full text-xs font-semibold text-white lg:text-sm">OPENING TIMES</h1>
            <p className="w-2/5 text-xxs text-paragraph md:w-1/2 lg:text-xs">
              Monday - Thursday <br /> 12:00 pm - 00:00 am
            </p>
            <p className="w-3/5 text-xxs text-paragraph md:w-1/2 lg:text-xs">
              Friday <br /> 2:00 pm - 00:00 am
            </p>
            <p className="w-full text-xxs text-paragraph lg:text-xs">
              saturday <br /> 12:00 pm - 00:00 am
            </p>
          </div>
          <div className="flex flex-wrap gap-y-3 w-full md:px-4 md:w-1/3 md:border-s md:border-e md:border-white lg:gap-y-5 lg:px-14 xl:px-24">
            <h1 className="mb-2 w-full text-xs font-semibold text-white lg:text-sm">LOCATION</h1>
            <p className="w-full text-xxs text-paragraph lg:text-xs">123 Main Street, Anytown USA</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9285160799036!2d-74.0077298247787!3d40.74159843580436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf6dd90021%3A0x645ce21be1b31735!2sStarbucks%20Reserve%20Roastery%20New%20York!5e0!3m2!1sid!2sid!4v1699156228315!5m2!1sid!2sid"
              className="w-56 h-36 md:w-full lg:h-40"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col gap-y-3 w-full md:pl-4 md:w-1/3 lg:gap-y-5 lg:pl-14 xl:pl-24">
            <h1 className="mb-2 text-xs font-semibold text-white lg:text-sm">SOCIAL MEDIA</h1>
            <p className="w-3/4 text-xxs text-paragraph lg:w-full lg:text-xs">Follow us on Instagram and Facebook for updates and special offers!</p>
            <div className="flex gap-3 text-sm text-white lg:gap-4">
              <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="cursor-pointer text-sm text-white transition-all duration-300 ease-in-out lg:text-base hover:opacity-80" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-sm text-white transition-all duration-300 ease-in-out lg:text-base hover:opacity-80" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} className="cursor-pointer text-sm text-white transition-all duration-300 ease-in-out lg:text-base hover:opacity-80" />
              </a>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="cursor-pointer text-sm text-white transition-all duration-300 ease-in-out hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full text-xxs text-white text-center lg:mt-16 lg:text-xs xl:mt-24">all rights reserved © cofshop 2023</div>
    </section>
  );
};

export default Footer;

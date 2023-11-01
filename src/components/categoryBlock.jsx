import { Link } from "react-router-dom";

const CategoryBlock = ({ title, linkTo, images, classLink, classImage }) => {
  return (
    <Link to={linkTo} className={`relative rounded-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden transition duration-300 ease-in-out hover:scale-[0.98] md:rounded-2xl ${classLink}`}>
      {images.length > 1 ? (
        <>
          <div className="p-2 w-1/2 md:p-3 md:w-1/5 lg:p-5 lg:w-1/4 xl:w-1/3">
            <h2 className="text-xxs font-semibold text-dark md:text-xs md:font-bold lg:text-sm">{title}</h2>
          </div>
          <div className="relative flex justify-between w-1/2 z-10 md:justify-start md:gap-3 md:w-4/5 lg:w-3/4 xl:gap-5 xl:w-2/3">
            {images.map((src, index) => (
              <img key={index} src={src} alt="Image Product" className={`object-cover ${classImage}`} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="p-2 md:p-3 lg:p-5">
            <h2 className="text-xxs font-semibold text-dark md:text-xs md:font-bold lg:text-sm">{title}</h2>
          </div>
          {images.map((src, index) => (
            <img key={index} src={src} alt="Image Product" className={`absolute w-28 h-28 object-cover ${classImage}`} />
          ))}
        </>
      )}
    </Link>
  );
};

export default CategoryBlock;

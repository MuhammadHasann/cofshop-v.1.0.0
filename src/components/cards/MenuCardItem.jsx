const Product = ({ image, name, price, rate, width }) => {
  width = width || "w-full";

  return (
    <div className={`p-2 ${width} bg-white rounded-md shadow-[0_0px_4px_-1px_rgba(0,0,0,0.5)] lg:shadow-[0_0px_6px_0px_rgba(0,0,0,0.3)]`}>
      <div className="relative flex justify-center items-center w-full h-36 bg-gray-200 rounded md:h-40 lg:h-48 xl:h-72">
        <img src={image} alt="Image Product" className="w-32 h-32 object-contain lg:w-36 lg:h-36 xl:w-52 xl:h-52" />
        <button className="absolute top-1 right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 fill-transparent stroke-dark transition-all duration-300 ease-in-out hover:fill-red-200 hover:stroke-red-500 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      <h1 className="mt-2 mb-1 w-full h-8 text-xxs font-semibold text-dark lg:mt-3 lg:h-12 lg:text-xs xl:h-14 xl:text-sm">{name}</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-dark lg:text-base xl:text-lg">${price}</h2>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-red-500 lg:w-5 lg:h-5">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <p className="text-xs text-dark lg:text-sm">{rate}k</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

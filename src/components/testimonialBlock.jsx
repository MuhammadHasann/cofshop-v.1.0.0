const TestimonialBlock = ({ name, review, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center py-5 px-8 mx-auto w-[260px] bg-white border border-dark rounded-md md:py-3 md:px-4 md:w-80 md:items-start lg:w-72 xl:w-[360px]">
      <p className="h-32 text-xxs text-dark text-center text-ellipsis overflow-hidden md:h-44 md:text-xs md:text-start lg:h-52 lg:leading-normal">{review}</p>
      <p className="text-xxs font-medium text-primary text-center md:text-xs md:text-start">{name}</p>
      <div className="flex gap-[2px]">
        {Array(parseInt(`${rating}`))
          .fill()
          .map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 fill-yellow-500 md:w-4 md:h-4">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
      </div>
    </div>
  );
};

export default TestimonialBlock;

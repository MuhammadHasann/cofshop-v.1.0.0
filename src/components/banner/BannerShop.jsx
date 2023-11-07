const Banner = ({ children, classText, classImage, classHeading, heading, classParagraph, paragraph, classBanner }) => {
  classHeading = classHeading || "text-xs font-semibold md:text-sm lg:text-base";
  classParagraph = classParagraph || "flex-1 text-xxs lg:text-xs";

  return (
    <div className={`flex rounded-lg overflow-hidden md:rounded-2xl ${classBanner}`}>
      <div className={`flex flex-col ${classText}`}>
        <h2 className={classHeading}>{heading}</h2>
        <p className={classParagraph}>{paragraph}</p>
        {children}
      </div>
      <div className={`bg-cover bg-center ${classImage}`}></div>
    </div>
  );
};

export default Banner;

import { Link } from "react-router-dom";
import ProductCategoryCard from "../../components/cards/ProductCategoryCard";
import BannerShop from "../../components/banner/BannerShop";

const Categories = () => {
  return (
    <section id="category" className="w-full bg-white">
      <div className="container">
        <div className="grid grid-cols-3 gap-3 py-10 md:grid-cols-4 md:gap-5 xl:gap-6">
          <h1 className="col-span-full mb-2 text-sm font-bold text-dark md:mb-2 md:text-base">Shop by categories</h1>
          <BannerShop
            heading="Enjoy the sensation of a coffee shop"
            paragraph="How delicious the menus from our coffee shop are"
            classBanner="col-span-full h-32 md:col-span-2 md:row-start-2 md:row-span-2 md:h-42 lg:h-60"
            classText="gap-1 p-2 w-1/2 bg-[#181818] text-white md:gap-2 md:p-3 lg:gap-4 lg:p-5 lg:w-2/5"
            classImage="w-1/2 bg-category-pattern lg:w-3/5"
          >
            <Link
              to="/menu/popular"
              className="cursor-pointer flex items-center py-1 px-3 w-fit bg-transparent text-xxs font-semibold border border-white rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 lg:px-4 lg:text-xs"
            >
              See menu
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </BannerShop>
          <ProductCategoryCard
            title="Popular"
            linkTo="/menu/popular"
            images={["/assets/image/product/product1.png", "/assets/image/product/product2.png", "/assets/image/product/product3.png", "/assets/image/product/product4.png"]}
            classLink="col-span-full flex h-14 bg-amber-500 after:content-[url('/assets/image/pattern/pattern.svg')] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-52 after:h-full md:col-span-2 md:row-start-2 md:row-span-1 md:h-20 md:after:w-[292px] lg:h-28 lg:after:w-[420px]"
            classImage="w-10 h-20 object-cover md:w-14 md:h-32 lg:w-20 lg:h-44"
          />
          <ProductCategoryCard
            title="Hot Coffee"
            linkTo="/menu/hot-coffee"
            images={["/assets/image/product/hot coffee/Americano.png"]}
            classLink="h-20 bg-white md:row-start-4 md:row-span-1 md:h-40 lg:h-44"
            classImage="-bottom-8 -right-8 -rotate-45 md:-bottom-14 md:-right-14 md:w-56 md:h-56 lg:-bottom-16 lg:-right-16 lg:w-64 lg:h-64"
          />
          <ProductCategoryCard
            title="Teas"
            linkTo="/menu/teas"
            images={["/assets/image/product/teas/Black Tea with Ruby Grapefruit & Honey.png"]}
            classLink="h-20 bg-white md:row-start-4 md:row-span-1 md:h-40 lg:h-44"
            classImage="-bottom-8 -right-8 -rotate-45 md:-bottom-14 md:-right-14 md:w-56 md:h-56 lg:-bottom-16 lg:-right-16 lg:w-64 lg:h-64"
          />
          <ProductCategoryCard
            title="Cold Coffee"
            linkTo="/menu/cold-coffee"
            images={["/assets/image/product/cold coffee/Ultra Caramel.png"]}
            classLink="h-20 bg-white md:row-start-3 md:row-span-3 md:h-full"
            classImage="-bottom-8 -right-8 -rotate-45 md:-bottom-8 md:-right-8 md:w-64 md:h-64 md:-rotate-[30deg] lg:-bottom-14 lg:-right-14 lg:w-[340px] lg:h-[340px]"
          />
          <ProductCategoryCard
            title="Iced Tea"
            linkTo="/menu/iced-tea"
            images={["/assets/image/product/iced tea/Iced Green Tea.png"]}
            classLink="h-20 bg-white md:row-start-3 md:row-span-3 md:h-full"
            classImage="-bottom-8 -right-8 -rotate-45 md:-bottom-8 md:-right-8 md:w-64 md:h-64 md:-rotate-[30deg] lg:-bottom-14 lg:-right-14 lg:w-[340px] lg:h-[340px]"
          />
          <ProductCategoryCard
            title="Food"
            linkTo="/menu/food"
            images={["/assets/image/product/food/Chargrilled Vegetable & Vegan Feta Panini.png"]}
            classLink="h-20 bg-white md:col-span-2 md:row-start-5 md:row-span-2 md:h-full"
            classImage="-bottom-4 -right-4 w-28 h-28 md:-bottom-12 md:right-1 md:w-64 md:h-64 lg:-bottom-14 lg:right-2 lg:w-80 lg:h-80"
          />
          <Link
            to="/menu/drinks"
            className="relative h-20 bg-white rounded-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden transition duration-300 ease-in-out hover:scale-[0.98] md:col-span-2 md:row-start-6 md:row-span-1 md:h-24 md:rounded-2xl lg:h-32"
          >
            <div className="p-2 md:p-3 lg:p-5">
              <h2 className="text-xxs font-semibold text-dark md:text-xs md:font-bold lg:text-sm">Drinks</h2>
            </div>
            <img src="/assets/image/product/drinks/Dragon Drink.png" alt="Image Product" className="absolute -bottom-8 -right-8 w-28 h-28 object-cover -rotate-45 md:hidden" />
            <div className="hidden md:absolute md:top-0 md:right-2 md:flex md:justify-between md:gap-2 md:z-10 lg:right-5 lg:gap-5">
              <img src="/assets/image/product/drinks/Matcha Green Tea.png" alt="Image Product" className="md:object-cover md:w-20 md:h-40 lg:w-28 lg:h-64" />
              <img src="/assets/image/product/drinks/Chocolate Cream.png" alt="Image Product" className="md:object-cover md:w-20 md:h-40 lg:w-28 lg:h-64" />
              <img src="/assets/image/product/drinks/Raspberry Black Currant Juice Blend.png" alt="Image Product" className="md:object-cover md:w-20 md:h-40 lg:w-28 lg:h-64" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;

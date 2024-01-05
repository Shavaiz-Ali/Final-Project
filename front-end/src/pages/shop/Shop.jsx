import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
import MultiRangeSlider from "../../components/multiRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/products/product.action";
import SkeltonCard from "../../components/cardSkelton";
import ProductCard from "../../components/productCard";
const Shop = () => {
  const location = useLocation();
  const params = location.pathname.slice(1);
  const [price, setPrice] = useState(null);
  const [selectedCat, setSelectedCat] = useState("All");
  const allCategory = [
    "All",
    "Fashion Clothes",
    "Smart Watch",
    "Women Clothes",
    "Casual Clothes",
  ];

  const { isProductFetching, allProducts } = useSelector(
    (state) => state.getAllProductsSlicer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ category: selectedCat, ...price }));
  }, [selectedCat, dispatch, price]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-[38px] font-[600] uppercase">Shop</h3>
        <BreadCrumbs className={""} params={params} />
      </div>

      <div className="min-h-screen bg-[#F4F5F6] grid grid-cols-1 sm:grid-cols-4 py-10 px-[40px] tablet:px-[40px] md:px-[80px]">
        <div className="p-4 sm:col-span-1">
          <h1 className="text-[#415161] text-4xl font-poppins leading-5 font-bold">
            Filter by Price
          </h1>
          <div className="my-10">
            <MultiRangeSlider
              min={price ? price.minPrice : 0}
              max={price ? price.maxPrice : 1000}
              setPrice={setPrice}
              price={price}
            />
          </div>

          <h2 className="mt-10 font-thin  text-3xl sm:text-1.4rem text-[#415161">
            Categories
          </h2>

          <div className="mt-10">
            {allCategory?.map((item, index) => {
              return (
                <p
                  className="cursor-pointer p-3 hover:bg-orange-800 bg-orange-600 text-white max-w-[150px] flex justify-center my-2 rounded-xl"
                  key={index}
                  onClick={() => {
                    setSelectedCat(item);
                  }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div className="border-l border-[#dddddd] p-4 sm:col-span-3 px-4 sm:px-[40px]">
          <p className="text-[#777] text-sm">Home/{selectedCat}</p>
          <div className="mt-10 flex justify-between items-center">
            <h2 className="text-4xl font-normal font-poppins leading-tight text-orange-600">
              {selectedCat}
            </h2>
            <p>{"(" + allProducts?.length + ")"} results</p>
          </div>
          {!isProductFetching && allProducts.length < 1 && (
            <p className="flex justify-center items-center min-h-[200px] text-3xl text-[#ff5151]">
              No Products Found!
            </p>
          )}
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {isProductFetching &&
              Array(10)
                .fill(1)
                .map((index) => {
                  return <SkeltonCard key={index} />;
                })}

            {!isProductFetching &&
              allProducts &&
              allProducts?.map((item, index) => {
                return (
                  <ProductCard
                    item={item}
                    selectedCat={selectedCat}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

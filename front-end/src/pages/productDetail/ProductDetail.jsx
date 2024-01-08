import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { Wrapper } from "../../components/wrapper/Wrapper";
import ProductDetailSlider from "../../components/productDetailSlider/ProductDetailSlider";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/storeSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const item = location.state.item;
  console.log(item)
  const params = location.pathname.slice(1, 8);
  const handleAddToCart = (item, quantity) => {
    console.log(item, quantity);
    dispatch(addToCart({ item, quantity }));
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-[38px] font-[600] uppercase ">Product</h3>
        <BreadCrumbs className={""} params={params} />
      </div>

      {/* product card detail starts here  */}
      <Wrapper className="md:flex justify-start gap-5 my-[35px] sm:w-[80%]">
        {/* image slider  */}
        <ProductDetailSlider item={item} />
        {/* product details  */}
        <div className="flex flex-col items-start gap-5 mt-[30px] md:w-[50%] w-full">
          <div className="flex justify-center items-center gap-4">
            <p className="text-xl font-bold">{item.name}</p>
            {item.discount ? (
              <>
                <h1 className="flex justify-center items-center rounded-[4px] h-[25px] px-3 text-[14px] font-[400]  bg-black/[0.15]">
                  Sale!
                </h1>
                <h1 className="flex justify-center items-center rounded-[4px] h-[25px] px-3 text-[14px] font-[400]  bg-black/[0.15]">
                  low stock
                </h1>
                <h1 className="flex justify-center items-center rounded-[4px] h-[25px] px-3 text-[12px] font-[400] bg-yellow-400">
                  {item.discount}
                </h1>
              </>
            ) : (
              <h1 className="flex justify-center items-center rounded-[4px] h-[25px] px-3 text-[14px] font-[400]  bg-black/[0.15]">
                low stock
              </h1>
            )}
          </div>
          <h1 className="text-[1.2rem] font-[600]">{item.title}</h1>
          <p className="text-orange-600 text-[1.1rem] font-[500]">
            Rating({item.rating})
            <span className="text-blue-600 text-[16px] ml-2">
              2 Customer Reviews
            </span>
          </p>
          <h1 className="text-orange-600 text-[1.5rem] font-[600]">
            {item.price}
          </h1>
          <p className="text-[14px] text-gray-600/[0.90] font-[400]">
            {item.description}
          </p>
          {/* offer  */}
          <h1 className="text-[16px] font-[500]">
            <span className="text-yellow-400">Hurry Up!</span> Limited Time
            Offer
          </h1>
          <div className="flex justify-center items-center gap-3">
            <h1 className="h-[50px] w-[50px] bg-black text-white text-[14px] font-[400] rounded-[4px] flex flex-col justify-center items-center">
              00
              <span>DAY</span>
            </h1>
            <h1 className="h-[50px] w-[50px] bg-black text-white text-[14px] font-[400] rounded-[4px] flex flex-col justify-center items-center">
              00
              <span>HOUR</span>
            </h1>
            <h1 className="h-[50px] w-[50px] bg-black text-white text-[14px] font-[400] rounded-[4px] flex flex-col justify-center items-center">
              00
              <span>MIN</span>
            </h1>
            <h1 className="h-[50px] w-[50px] bg-yellow-400 text-white text-[14px] font-[400] rounded-[4px] flex flex-col justify-center items-center">
              00
              <span>SEC</span>
            </h1>
          </div>
          {/* add to cart button  */}
          <button
            className="h-[50px] w-[220px] flex justify-center items-center text-white bg-orange-600 text-[16px] font-[600] rounded-[4px]"
            onClick={() => handleAddToCart(item, 1)}
          >
            Add to Cart
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetail;

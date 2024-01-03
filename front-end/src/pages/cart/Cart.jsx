import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCard from "./CartItem"
import { Reset } from "../../Store/storeSlice";
// import { emptyCart } from "../../assets/images/index";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { useLocation } from "react-router-dom";
import { Wrapper } from "../../components/wrapper/Wrapper";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.users.products);
  const [totalAmt, setTotalAmt] = useState("");
  const location = useLocation();
  const params = location.pathname.slice(1, 8);
  // console.log(products)
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      console.log(item.price)
      price += item.price * 1;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="mx-auto overflow-hidden" data-aos="zoom-in">
       <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-[38px] font-[600] uppercase ">Cart</h3>
        <BreadCrumbs className={""} params={params} />
      </div>
      { products.length > 0 ? (
        <Wrapper className="my-5">
          <div className="lg:flex justify-between gap-4 w-full">
            <div className="border w-full">
              <div className="flex justify-around items-center">
                <h3 className="font-[500] text-[16px] mt-4 lg:mt-0">Product</h3>
                <h3 className="font-[500] text-[16px] mt-4 lg:mt-0">Price</h3>
                <h3 className="font-[500] text-[16px] mt-4 lg:mt-0">Quantity</h3>
                <h3 className="font-[500] text-[16px] mt-4 lg:mt-0">Sub Total</h3>
              </div>
                <div className="mt-5 border-t py-3">
                  {products.map((item) => {
                    return(
                      <div key={item.id}>
                        <ItemCard item={item}/>
                      </div>
                    )
                  })}
                </div>
                {/* apply coupon */}
                <div className="flex justify-between items-center border-t border-black/[0.15] py-4 sm:px-8 px-1 ">
                <div className="flex  items-center sm:gap-4 gap-1">
                  <input type="text" placeholder="Coupon Number" className="sm:w-[200px] w-[100px] px-2 h-[40px] text-[14px] border border-black/[0.15] outline-none"/>
                  <h1 className="sm:text-[18px] text-[13px] sm:font-[600] font-[300]">Apply Coupon</h1>
                </div>
                  <h1 className="sm:text-[18px] text-[13px] sm:font-[600] font-[300]">Update Cart</h1>
              </div>
            </div>
            {/* checkout*/}
              <div className="flex flex-col justify-items-end items-end bg-black/[0.12] py-2 px-3 lg:my-0 my-2">
                <h1 className="text-[24px] font-[600] self-start">Cart Total</h1>
                  <div className="flex flex-col border justify-between border-black/[0.15] sm:w-[350px] w-[95%] mt-4">
                      <h1 className="flex justify-between md:text-xl sm:text-[16px] text-[13px] font-[600] py-2 px-3">SubTotal
                        <span>${totalAmt}</span>
                      </h1>
                      <h1 className="flex justify-between border-t border-black/[0.15] md:text-xl sm:text-[16px] text-[13px] font-[600] py-2 px-3">Shipping Charges
                        <span>${shippingCharge}</span>
                      </h1>
                      <h1 className="flex justify-between border-t border-black/[0.15] md:text-xl sm:text-[16px] text-[13px] font-[600] py-2 px-3">Total
                        <span>${totalAmt + shippingCharge}</span>
                      </h1>
                  </div>
                <button className="w-[250px] h-[40px] text-white bg-black border-0 outline-none mt-4">Proceed to Checkout</button>
              </div>
            </div>
          <button
            onClick={() => dispatch(Reset())}
            className="py-2 px-10 lg:my-2 my-0 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>
        </Wrapper>
      ) : (
        <div className=" text-[3rem] text-black font-[700] uppercase flex flex-col justify-center items-center transtion-all duration-700 ease-in-out scale-110 h-[50vh]">
          <h1> Cart is Empty</h1>
          <Link to={"/"} className='flex justify-center items-center text-[16px] py-3 text-white bg-[#2AC37D] rounded-[50px] w-[200px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out'>Continue Shopping</Link>
        </div>
      )
      }
    </div>
  )
}

export default Cart
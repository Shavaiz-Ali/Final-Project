import { IoStorefrontOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
const NavbarFixedBottom = () => {
  const products = useSelector((state) => state.users.products);
  return (
    <div className="fixed bottom-0 left-0 w-full h-[80px] flex justify-between items-center bg-white border-t px-[10px] z-[50]">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <IoStorefrontOutline className="text-[20px] text-black/[0.30]"/>
          <span className="text-[12px] text-black/[0.30] font-[400]">Store</span>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <IoSearchOutline className="text-[23px] text-black/[0.30]"/>
          <span className="text-[12px] text-black/[0.30] font-[400]">Search</span>
        </div>
        <div className="relative flex flex-col items-center justify-center cursor-pointer">
          <FaRegHeart className="text-[20px] text-black/[0.30]"/>
          <span className="text-[12px] text-black/[0.30] font-[400]">Wishlist</span>
          <span className="h-[16px] w-[16px] bg-yellow-400 rounded-full flex justify-center items-center absolute top-[-10px] right-[0px] text-[14px] font-400">0</span>
        </div>
        <Link to={"/cart"} onClick={() => window.scrollTo(0, 0)} className="relative flex flex-col items-center justify-center cursor-pointer">
          <AiOutlineShoppingCart className="text-[20px] text-black/[0.30]"/>
          <span className="text-[12px] text-black/[0.30] font-[400]">Cart</span>
          <span className="h-[16px] w-[16px] bg-yellow-400 rounded-full flex justify-center items-center absolute top-[-10px] right-[-10px] text-[14px] font-400">{products.length > 0 ? products.length : 0}</span>
        </Link>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <CiUser className="text-[23px] text-black/[0.30]"/>
          <span className="text-[12px] text-black/[0.30] font-[400]">Account</span>
        </div>
      </div>
    </div>
  )
}

export default NavbarFixedBottom

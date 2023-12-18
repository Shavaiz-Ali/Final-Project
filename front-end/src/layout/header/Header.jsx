import { FaRegUser } from "react-icons/fa6";
import {Wrapper} from "../../components/wrapper/Wrapper";
import {Link} from "react-router-dom"
const Header = () => {
    return(
        <header className="w-full py-5 border-b">
            <Wrapper className="flex sm:justify-between justify-center items-center w-full">
                <h3 className="sm:flex hidden text-[14px] text-[#131313]/[0.50] font-[400]">Quick Guides US/USD <span className="pl-2 pr-2">|</span> Sell With Us</h3>
                <div className="flex justify-center items-center gap-3">
                    <Link to={"/signin"} className="flex justify-center items-center gap-1 text-[14px] text-[#131313]/[0.50] font-[400]">
                        <FaRegUser className="text-blue-600"/> Sign In</Link>
                    <span className="text-[14px] text-[#131313]/[0.50] font-[400]">|</span>
                    <a href="#" className="text-[14px] text-[#131313]/[0.50] font-[400]">My Account</a>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header
import {useState, useEffect} from "react";
import {NavbarPcData} from "../../utils/Constants"
import {Link} from "react-router-dom";
import { Wrapper } from "../../components/wrapper/Wrapper";
import NavbarMobile from "./navbarMobile";
import NavbarFixedBottom from "./NavbarFixedBottom";
import logo from "/navlogo.png"
//react icons
import {FaBarsStaggered} from "react-icons/fa6";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [navbarPc, setNavbarPc] = useState(true);
    const products = useSelector((state) => state.users.products);
    useEffect(() =>{
        let responsiveNavbar = () =>{
            if(window.innerWidth <= 766){
                setNavbarPc(false)
            } else{
                setNavbarPc(true)
            }
        }
        responsiveNavbar();
        window.addEventListener("resize", responsiveNavbar);
    })

    return(
        <nav className="w-full shadow-md py-[25px]">
            <Wrapper className={"flex justify-between items-center"}>
                <h1 className="text-3xl font-[600]">Store</h1>
                {
                    navbarPc ? (
                        <ul className="flex justify-center items-center gap-5">
                            {
                                NavbarPcData.map((item) => (
                                    <Link to={item.link} key={item.id} className="text-[16px] text-black font-[500] ">{item.name}
                                     </Link>
                                ))
                            }
                        </ul>
                    ) : (
                        <>
                            <NavbarMobile setShowMenu={setShowMenu} showMenu={showMenu}/>
                            <NavbarFixedBottom />
                        </>
                    )
                }
                <div className="md:flex hidden justify-center items-center gap-5 text-[14px] font-400">
                    <FaUser className="text-[20px] "/>
                    <div className="relative">
                        <span className="h-[16px] w-[16px] bg-yellow-400 rounded-full flex justify-center items-center absolute top-[-13px] right-[-10px] text-[14px] font-400">0</span>
                        <FaRegHeart className="text-[20px] "/>
                    </div>
                    <Link to={"/cart"} className="relative">
                        <span className="h-[16px] w-[16px] bg-yellow-400 rounded-full flex justify-center items-center absolute top-[-13px] right-[-10px] text-[14px] font-400">{products.length > 0 ? products.length : 0}</span>
                    <AiOutlineShoppingCart className="text-[20px] "/>
                    </Link>
                </div>
                    <div className="md:hidden">
                         <FaBarsStaggered className="text-[24px] font-bold cursor-pointer" onClick={() => setShowMenu(true)}/>
                     </div>
            </Wrapper>
        </nav>
    )
}

export default Navbar
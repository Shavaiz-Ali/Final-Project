import { useState } from "react";
import {NavbarPcData} from "../../utils/Constants";
import {NavbarMobileCategoryData} from "../../utils/Constants";
import {Link} from "react-router-dom";
import logo from "/mobile_logo.png";
import { MdClose } from "react-icons/md";

const NavbarMobile = ({setShowMenu, showMenu}) => {
  const [activeTab, setActiveTab] = useState("Menu");
  const [activeLink, setActiveLink] = useState("Home");
  const [menuData, setMenuData] = useState(true);
  const [categoryData, setCategoryData] = useState(false);
  const handleClick = (text) => {
    setActiveTab(text);
    if(text === "Menu"){
      setCategoryData(false)
      setMenuData(true)
    }  else{
      setCategoryData(true)
      setMenuData(false)
    }
  };

  return (
    <div className={`fixed sm:w-[400px] w-full h-screen bg-black top-0 ${showMenu ? "left-0" : "left-[-100%]"} transition-all duration-500 ease-in z-50`}>
      <div className="flex justify-between items-center border-b py-[22px] px-[20px]">
        <img src={logo} alt="logo" />
        <MdClose className="text-white text-[34px] font-bold cursor-pointer" onClick={() => setShowMenu(false)}/>
      </div>
      <div className="flex justify-start items-start py-[15px] px-[20px]">
        <button
          className={`h-[40px] w-[100px] ${
            activeTab === "Menu" ? "bg-gray-500/[0.25]" : "bg-gray-900/[0.25]"
          } text-white text-[14px] font-[400]`}
          onClick={() => handleClick("Menu")}
        >
          Menu
        </button>
        <button
          className={`h-[40px] w-[100px] ${
            activeTab === "Categories" ? "bg-gray-500/[0.25]" : "bg-gray-900/[0.25]"
          } text-white text-[14px] font-[400]`}
          onClick={() => handleClick("Categories")}
        >
          Categories
        </button>
      </div>
     <div className="flex justify-between items-center px-[20px]">
      {
          menuData && (
            <ul className="flex flex-col justify-start items-start gap-5 ">
              {
                  NavbarPcData.map((item) => (
                      <Link to={item.link} key={item.id} className={`text-[16px] ${activeLink === item.name ? "text-orange-600" : "text-white"} font-[500]`} onClick={() => {
                        setActiveLink(item.name)
                        setShowMenu(false)
                      }}>{item.name}
                  </Link>
                  ))
              }
            </ul>
          )
        }
        {
          categoryData && (
            <ul className={`flex flex-col justify-start items-start gap-5 `}>
            {
                NavbarMobileCategoryData.map((item) => (
                    <Link to={item.link} key={item.id} className={`text-[16px] ${activeLink === item.name ? "text-orange-600" : "text-white"} font-[500]`} onClick={() => {
                      setActiveLink(item.name)
                      setShowMenu(false)
                      }}>{item.name}
                </Link>
                ))
            }
          </ul>
          )
        }
     </div>
    </div>
  );
};

export default NavbarMobile;

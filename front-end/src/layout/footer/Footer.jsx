import { Link } from "react-router-dom";
import {Wrapper} from "../../components/wrapper/Wrapper";
import { footerData } from "../../utils/Constants";
import {} from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#f5f4ee] h-min-[100vh] w-full overflow-y-auto">
        <Wrapper  className={"w-full mx-auto  py-[90px]"}>
            {/* footer header  */}
             <div className="sm:flex justify-between items-center w-full mx-auto">
                <h1 className="flex flex-col sm:items-start items-center justify-center sm:gap-4  text-[1.5rem] font-[600]">Subscribe Now!
                    <span className="text-[18px] font-[400] text-gray-600">To our Newsletter for latest updates.</span>
                </h1>
                <div className="flex justify-center items-center sm:mt-0 mt-8">
                    <input type="text" className="h-[50px] sm:max-w-[400px] w-[85%] border-0 outline-none bg-white text-gray-600 text-[14px] font-[300] px-[15px]"/>
                    <button className="h-[50px] w-[120px] bg-[#f7ba01] flex justify-center items-center rounded-[4px] text-[14px] font-[600]">Subscribe</button>
                </div>
             </div>
             {/* distributer */}
             <div className="my-[50px] border"/>
             {/* footer bottom starts here  */}
             <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-full justify-between mx-auto gap-8" >
                <div className="flex flex-col items-start gap-7">
                    <img src="/navlogo.png" alt="footer logo" />
                    <p className="text-[14px] text-gray-500 font-[400]">Namkand sodales vel online best prices Amazon Check out ethnic wear, formal wear western wear Blood Pressure Rate Monito.</p>
                    <div className="flex gap-5">
                         <FaFacebook size={20}/>
                         <FaInstagram size={20}/>
                         <FaTwitter size={20}/>
                         <FaYoutube size={20}/>
                         <FaLinkedin size={20}/>
                    </div>
                </div>
                {
                    footerData.map((item) => (
                        <div className="flex flex-col items-start gap-4" key={item.id}>
                            <h1 className="text-[1.2rem] font-[600]">{item.name}</h1>
                            {
                                item.links.map((link) => (
                                    <Link to={link.link} className="text-[14px] text-gray-500 font-[400] hover:text-blue-600" key={link.id}>{link.name}</Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </Wrapper>
            {/* copy rights section  */}
            <div className="bg-black py-[20px] md:mb-0 mb-[80px]">
                <Wrapper className={"sm:flex justify-between items-center md:gap-0 gap-4"}>
                    <p className="text-[14px] text-gray-500 font-400 text-center">Copyright © 2023-24 - Venam All Rights Reserved.</p>
                    <div className="flex justify-center items-center gap-3 py-[10px]">
                        <img src="https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/card_img.png" alt="paypal image" />
                    </div>
                </Wrapper>
            </div>
    </footer>
  )
}

export default Footer
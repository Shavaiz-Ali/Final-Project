import {Wrapper} from "../../components/wrapper/Wrapper"
const Cards = () => {
  return (
    <Wrapper className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 items-center my-5 w-full">
        <div className="bg-gray-600/[0.12]">
            <img src="https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/06/top_cat_banner01.jpg" alt="" className="hover:scale-[0.98] transition-all duration-300 ease-in-out w-full cursor-pointer object-center"/>
        </div>
        <div className="bg-gray-600/[0.12] my-5">
            <img src="https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/06/top_cat_banner02.jpg" alt="" className="hover:scale-[0.98] transition-all duration-300 ease-in-out w-full cursor-pointer object-center"/>
        </div>
        <div className="bg-gray-600/[0.12] lg:w-auto w-full">
            <img src="https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/06/top_cat_banner03.jpg" alt="" className="hover:scale-[0.98] transition-all duration-300 ease-in-out w-full cursor-pointer object-center"/>
        </div>
    </Wrapper>
  )
}

export default Cards

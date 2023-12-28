    import {productsData} from "../../utils/constants"
    import { FaEye, FaBalanceScale } from 'react-icons/fa';

const Productscard = () => {
    return(
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 items-center my-[10px]">
            {productsData.map((item) =>(
                <div className="relative rounded-[3px] border" key={item.id}>
                    <img src={item.image} alt={`product-image${item.id}`} className="sm:h-[350px] w-full"/>
                    <div className="flex justify-center items-center gap-16 py-[10px]">
                        <FaEye size={17}  color={"grey"}/>
                        <FaBalanceScale size={17} color={"grey"}/>
                    </div>
                    <button className="w-full bg-black/[0.80] text-white flex justify-center items-center text-[16px] font-[400] py-2">Add to cart</button>
                    <div className="flex justify-between items-center px-5 mt-3">
                        <p className="text-orange-600 font-[600] text-[16px]">Rating(4.5)</p>
                        {item.discountPrice  && (
                            <p className="line-through text-[14px] font-[500] text-gray-600/[0.65]">{item.discountPrice}</p>
                        )}
                    </div>
                    <div className="flex justify-between items-center px-5 mb-3">
                        <h3 className="text-[16px] font-[500]">{item.title}</h3>
                        <p className="text-[14px] font-[500] text-orange-600 ">{item.price}</p>
                    </div>
                    {
                        item.discount && (
                            <div className="absolute top-[20px] flex justify-between items-center px-5 w-full">
                                <p className="h-[28px] w-[48px] bg-yellow-500 rounded-[3px] flex justify-center items-center text-[14px] font-[400] text-white">{item.discount}</p>
                                <p className="h-[28px] w-[48px] bg-orange-500 rounded-[3px] flex justify-center items-center text-[14px] font-[400] text-white">Sale!</p>
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    )
}
export default Productscard
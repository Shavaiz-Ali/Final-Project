



const  ProductNav = () => {
    return(
        <div className="bg-gray-300/[0.20] w-full rounded-[50px] py-[15px] mt-[15px]">
            <ul className="flex justify-center items-center flex-wrap gap-5">
                <li className="text-[16px] font-[500] text-orange-600 cursor-pointer">All</li>
                <li className="text-[16px] font-[500] text-black/[0.50] cursor-pointer">Fashion Clothes</li>
                <li className="text-[16px] font-[500] text-black/[0.50] cursor-pointer">Smart Watch</li>
                <li className="text-[16px] font-[500] text-black/[0.50] cursor-pointer">Women Clothes</li>
                <li className="text-[16px] font-[500] text-black/[0.50] cursor-pointer">Casual Clothes</li>
            </ul>
        </div>
    )
}

export default ProductNav
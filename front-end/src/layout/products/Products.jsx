import ProductNav from "../../components/productNav/ProductNav"
import {Wrapper} from "../../components/wrapper/Wrapper"
import ProductsCard from "../../components/productsCard/ProductsCard"
const Products = () => {
  return (
    <div className="w-100 my-[50px]">
        <h2 className="text-[16px] text-orange-600 font-[400] text-center">Products</h2>
        <h3 className="text-[2.2rem] font-[500] text-center">Special offers for 2023</h3>
        <Wrapper>
             <ProductNav />
             <ProductsCard />
        </Wrapper>
    </div>
  )
}

export default Products
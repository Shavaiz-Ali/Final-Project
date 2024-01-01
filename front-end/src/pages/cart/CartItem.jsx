import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  decreaseQuantity,
  increaseQuantity,
} from "../../Store/storeSlice";
const ItemsCard = ({item}) => {
  const dispatch = useDispatch()
  console.log(item.quantity)
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col items-start md:col-span-4 col-span-6 ">
          <div className="flex items-center mt-1 gap-3">
            <span onClick={() => dispatch(
              deleteItem(item.id)
            )}>
            <ImCross className="cursor-pointer"/>
            </span>
            <img src={item.image} alt="" className="w-[50px] h-[50px]"/>
            <h1 className="sm:text-xl text-[18px] font-[600]">{item.name}</h1>
          </div>
      </div>

      <div className="md:col-span-2 col-span-6">        
          <h1 className="text-xl font-[600] mt-1">${item.price }</h1>
      </div>

      <div className="flex flex-col md:col-span-4 col-span-6">
          <div className="flex gap-5 items-center mt-1">
            <span className="sm:text-2xl text-[16px] flex items-center justify-center cursor-pointer duration-300 " onClick={() => dispatch(
              decreaseQuantity(item.id)
            )}>-</span>

            <h1 className="ext-xl flex justify-center items-center">{item.quantity }</h1>

            <span className="m:text-2xl text-[16px] flex items-center justify-center  cursor-pointer duration-300"onClick={() => dispatch(
              increaseQuantity(item.id)
            )}>+</span>
          </div>
      </div>

      <div className="md:col-span-2 col-span-6">        
          <h1 className="text-xl font-[600] mt-1">${item.price * item.quantity}</h1>
      </div>
    </div>
  )
}

export default ItemsCard
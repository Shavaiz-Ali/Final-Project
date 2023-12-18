import { Link } from "react-router-dom"
const BreadCrumbs = ({params, className}) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <h3 className="flex justify-center items-center gap-2  h-[50px] w-[210px] bg-white rounded-full">
        <Link to={"/"} className="text-[14px] font-[500] text-gray-600/[0.90]">Home</Link>
        <span className="h-[5px] w-[5px] bg-gray-600/[0.90] rounded-full"></span>
        <p className="capitalize text-[14px] font-[500] text-orange-600">{params}</p>
      </h3>
    </div>
  )
}

export default BreadCrumbs

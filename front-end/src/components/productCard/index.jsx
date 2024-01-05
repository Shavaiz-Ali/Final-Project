import { useState } from "react";
import { Link } from "react-router-dom";
// import AddToCart from "../addTocartModal";

const ProductCard = ({ item }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(isDialogOpen, "is");
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  // const handleCloseDialog = (e) => {
  //   e.stopPropagation();

  //   setIsDialogOpen(false);
  // };

  return (
    <div
      className="cursor-pointer text-center space-x-4"
      onClick={handleOpenDialog}
    >
      {/* <AddToCart
        image={image}
        selectedCat={selectedCat}
        name={name}
        price={price}
        showModal={isDialogOpen}
        onClose={handleCloseDialog}
        id={_id}
      /> */}
      <Link to={`/product/${item._id}`} state={{ item: item }}>
        <img
          src={"http://localhost:9000/" + item.image}
          alt="imagecup"
          className="w-full h-[240px] object-cover"
        />
        <p className="font-thin text-[#415161]">{item.categories}</p>
        <h4 className="font-bold  font-poppins leading-tight overflow-hidden overflow-ellipsis whitespace-nowrap">
          {item.name}
        </h4>
        <p>${item.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;

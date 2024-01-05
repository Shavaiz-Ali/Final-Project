const ProductDetailSlider = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 md:w-[50%] w-full">
      <img
        className="w-[]"
        src={`http://localhost:9000/${item.image}`}
        alt="product image"
      />

      {/* Use a consistent size for all images in the slider */}
      <div className="flex justify-center items-center gap-4">
        {[1, 2, 3, 4].map((index) => (
          <img
            key={index}
            className="h-auto w-[23%]"
            src={`http://localhost:9000/${item.image}`}
            alt={`product image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailSlider;

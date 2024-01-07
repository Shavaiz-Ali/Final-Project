import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  getAllProducts,
} from "../../store/products/product.action";

const EditProductForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const {
    singleProduct: { name, price, description, categories, stock, _id },
  } = useSelector((state) => state.getAllProductsSlicer);
  const [formData, setFormData] = useState({
    name: name,
    price: price,
    description: description,
    categories: categories,
    stock: stock,
  });

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editProduct({ id: _id, ...formData }));
    dispatch(getAllProducts());
    closeModal();
  };

  const allCategory = [
    "All",
    "Fashion Clothes",
    "Smart Watch",
    "Women Clothes",
    "Casual Clothes",
  ];
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        className="h-[45px] w-full border px-2 outline-none"
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Product Name"
      />
      <input
        className="h-[45px] w-full border px-2 outline-none"
        type="text"
        name="price"
        id="price"
        onChange={onChange}
        value={formData.price}
        placeholder="Product Price"
      />
      <input
        className="h-[45px] w-full border px-2 outline-none"
        type="text"
        name="description"
        id="description"
        onChange={onChange}
        value={formData.description}
        placeholder="Description"
      />
      <select
        name="categories"
        id="categories"
        value={formData.categories}
        onChange={onChange}
        className="h-[45px] w-full border px-2 outline-none"
      >
        {allCategory.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        className="h-[45px] w-full border px-2 outline-none"
        type="text"
        name="stock"
        id="stock"
        value={formData.stock}
        onChange={onChange}
        placeholder="Product Stock"
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="h-[45px] w-[120px] bg-orange-500 text-white flex justify-center items-center rounded-[4px] text-[14px] font-[400]"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;

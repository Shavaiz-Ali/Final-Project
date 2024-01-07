import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  getAllProducts,
} from "../../store/products/product.action";

const AddProductForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    categories: "",
    stock: "",
    image: "",
  });

  const onChange = (e) => {
    if (e.target.name !== "image") {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      console.log(e.target.files);
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("product", formData.image);
    fd.append("name", formData.name);
    fd.append("price", formData.price);
    fd.append("description", formData.description);
    fd.append("categories", formData.categories);
    fd.append("stock", formData.stock);
    dispatch(addProduct(fd));
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
        onChange={onChange}
        placeholder="Product Name"
      />
      <input
        className="h-[45px] w-full border px-2 outline-none"
        type="text"
        name="price"
        id="price"
        onChange={onChange}
        placeholder="Product Price"
      />
      <input
        className="h-[45px] w-full border px-2 outline-none"
        type="text"
        name="description"
        id="description"
        onChange={onChange}
        placeholder="Description"
      />
      <select
        name="categories"
        id="categories"
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
        onChange={onChange}
        placeholder="Product Stock"
      />
      <div>
        <input type="file" name="image" id="image" onChange={onChange} />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="h-[45px] w-[120px] bg-orange-500 text-white flex justify-center items-center rounded-[4px] text-[14px] font-[400]"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;

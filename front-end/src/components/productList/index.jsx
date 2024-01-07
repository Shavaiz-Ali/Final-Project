import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} from "../../store/products/product.action";
import Dialog from "../dialog";
import AddProductForm from "../addProductForm";
import EditProductForm from "../editProductForm";

const ProductList = () => {
  const { allProducts, isProductFetching, isSingleProductFetching } =
    useSelector((state) => state.getAllProductsSlicer);
  const [open, setOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleEdit = (productId) => {
    dispatch(getSingleProduct(productId));
    setEditModalOpen(true);
    setId(productId);
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID ${productId}`);
    setDeleteModalOpen(true);
    setId(productId);
  };

  const confirmDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(getAllProducts());
    setDeleteModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>

      <div className="mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4"
          onClick={() => setOpen(true)}
        >
          Add Product
        </button>
      </div>

      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Image
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Price
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Actions
            </th>
          </tr>
        </thead>
        {isProductFetching ? (
          <p className="text-center">Loading...</p>
        ) : (
          <tbody>
            {allProducts?.map((product) => (
              <tr key={product._id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  <p className="w-20 truncate">{product._id}</p>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img
                    src={`http://localhost:9000/${product.image}`}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.price}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded-md"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <Dialog open={open} onClose={() => setOpen(false)} heading="Add Product">
        <AddProductForm closeModal={() => setOpen(false)} />
      </Dialog>
      <Dialog
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        heading="Edit Product"
      >
        <div>
          {isSingleProductFetching ? (
            <p className="text-center">Loading...</p>
          ) : (
            <EditProductForm
              closeModal={() => setEditModalOpen(false)}
              id={id}
            />
          )}
        </div>
      </Dialog>
      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        heading="Delete Product"
      >
        <div>
          <p className="mb-4">Are you sure you want to delete this product?</p>
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md mr-4"
              onClick={confirmDelete}
            >
              Delete
            </button>
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductList;

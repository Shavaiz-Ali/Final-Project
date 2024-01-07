import { useState } from "react";
import ProductList from "../../components/productList";
import UserList from "../../components/userList";
import BlogList from "../../components/blogList";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Admin Dashboard
        </h1>
        <div className="flex justify-center mb-8">
          <button
            className={`mr-6 px-6 py-3 rounded-md focus:outline-none ${
              activeTab === "products"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("products")}
          >
            Products
          </button>
          <button
            className={`mr-6 px-6 py-3 rounded-md focus:outline-none ${
              activeTab === "users"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("users")}
          >
            Users
          </button>
          <button
            className={`px-6 py-3 rounded-md focus:outline-none ${
              activeTab === "blogs"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("blogs")}
          >
            Blogs
          </button>
        </div>

        {/* Content based on selected tab */}
        <div className="bg-white rounded-md shadow-md p-6">
          {activeTab === "products" && <ProductList />}
          {activeTab === "users" && <UserList />}
          {activeTab === "blogs" && <BlogList />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

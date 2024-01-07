import Header from "../layout/header/Header";
import Navbar from "../layout/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import SingleBlog from "../pages/singleBlog";
import Contact from "../pages/contact/Contact";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Cart from "../pages/cart/Cart";
import Footer from "../layout/footer/Footer";
import Dashboard from "../pages/dashboard";
import "react-toastify/dist/ReactToastify.min.css";
const RootRouters = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RootRouters;

import "./App.css";
import Header from "./layout/header/Header";
import Navbar from "./layout/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import SignIn from "./pages/auth/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/auth/SignUp";
import Footer from "./layout/footer/Footer";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import SingleBlog from "./pages/singleBlog";
import Success from "./pages/messages/Success";
function App() {
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
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import AddProduct from "./components/addProduct/AddProduct"
import FetchAllProducts from "./components/allproducts/FetchAllProducts"
import Navbar from "./components/navbar/Navbar"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<AddProduct />}/>
        <Route path="/products" element={<FetchAllProducts />}/>
      </Routes>
    </>
  )
}

export default App

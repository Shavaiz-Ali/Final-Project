import AddProduct from "./components/addProduct/AddProduct"
import FetchAllProducts from "./components/allproducts/FetchAllProducts"
import Navbar from "./components/navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import RegisteredUsers from "./components/users/RegisteredUsers"

function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<AddProduct />}/>
        <Route path="/products" element={<FetchAllProducts />}/>
        <Route path="/users" element={<RegisteredUsers />}/>
      </Routes>
    </>
  )
}

export default App

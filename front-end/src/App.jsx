import './App.css'
import Header from "./layout/header/Header"
import Navbar from './layout/navbar/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import SignIn from './pages/auth/SignIn'
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/auth/SignUp'
import Footer from './layout/footer/Footer'
function App() {

  return (
    <>
      <Header />
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

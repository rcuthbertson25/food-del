import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import MyOrders from './pages/MyOrders/MyOrders'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/Verify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  const [user,setUser] = useState("")

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  },[]);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} setUser={setUser}/>:<></>}
      <div className='app'>
        <ToastContainer/>
        <Navbar setShowLogin={setShowLogin} user={user}/>
        <Routes>
          < Route path='/' element={<Home/>} />
          < Route path='/cart' element={<Cart/>} />
          < Route path='/order' element={<PlaceOrder/>} />
          < Route path='/verify' element={<Verify/>} />
          < Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

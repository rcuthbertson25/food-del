import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  })

  const [paymentMethod, setPaymentMethod] = useState('cod')

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const navigate = useNavigate();

  const placeOrder = async (event) => {
    event.preventDefault(); // prevent refresh page
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
      paymentMethod: paymentMethod
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      if (paymentMethod === 'cod') {
        navigate('/myorders');
        toast.success('Order Placed')
      }
      else{
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
    }
    else{
      alert("Error");
    }
  }

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required name='zipCode' onChange={onChangeHandler} value={data.zipCode} type="text" placeholder='Zip Code'/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0? 2.00 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + (getTotalCartAmount() > 0? 2.00 : 0)}</b>
            </div>
          </div>
          <h2>Payment Method</h2>
          <div className="payment-method">
            <label>
              <input 
                type="radio" 
                value="cod" 
                checked={paymentMethod === 'cod'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              COD ( Cash on Delivery )
            </label>
            <label>
              <input 
                type="radio" 
                value="stripe" 
                checked={paymentMethod === 'stripe'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Stripe ( Credit / Debit Test )
            </label>
          </div>
          <button type='submit'>{paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Payment'}</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

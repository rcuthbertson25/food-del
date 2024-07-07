import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useLocation } from 'react-router-dom';
import './MyOrders.css'

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);
    const location = useLocation();

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        // sort data by time stamp
        const sortedData = response.data.data.sort((a, b) => new Date(b.data) - new Date(a.data));
        setData(sortedData);
        console.log(response.data.data)
    }

    const getStatus = (status) => {
        switch (status.toLowerCase()){
            case 'food processing':
                return 'food-processing';
            case 'out for delivery':
                return 'out-for-delivery';
            case 'delivered':
                return 'delivered';
            default:
                return '';
        }
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token,location])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index === order.items.length-1) {
                                return item.name + " " + item.quantity + "x"
                            }
                            else{
                                return item.name + " " + item.quantity + "x" + ", "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p className={`status ${getStatus(order.status)}`}>
                            <span>&#x25cf;</span><b>{order.status}</b>
                        </p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders
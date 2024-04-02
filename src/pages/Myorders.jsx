import React from 'react'
import { useContext } from 'react' 
import { myorderContext } from '../context/MyOrders'
import Navbar from "../components/Navbar"
import './stylesheets/myorders.scss'

const Myorders = () => {
    const Orders = useContext(myorderContext);
  return (
    <>
    <div className="home-background-image"></div>
    <Navbar/>
    <div className="myorders-bg-div">
        <h1>Your Orders will reach you soon...</h1>
        <div className="Orders-items-container">
            {
                Orders && Orders.orders.map((item)=>{
                    return(
                        <div className="cart-item-div">
                          <img src={item.img} alt="" />
                          <div className="cart-item-info">
                            <h1>{item.dsc}</h1>
                            <h2>{item.country}</h2>
                            <h1>₹{item.price}</h1>
                          </div>
                        </div>
                      )
                })
            }
            <h1>Total Bill: {Orders.Total}</h1>
        </div>
    </div>
    </>
    
  )
}

export default Myorders
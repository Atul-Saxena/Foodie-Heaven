import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/Cart"
import { myorderContext } from '../context/MyOrders'
import './stylesheets/cart.scss'

const Cart = () => {
  const cart = useContext(CartContext);
  const myorder = useContext(myorderContext);

  const deleteByValue = value => {
    cart.setItems(oldValues => {
      return oldValues.filter(item => item !== value)
    })
    cart.setTotal(oldvalue => oldvalue-value.price)
  }
  return (
    <>
    <div className="home-background-image"></div>
    <Navbar/>
    <div className="cart-bg-div">
        <h1>Your Cart Details...</h1>
        <div className="cart-container">
          {

            cart && cart.items.map((item,i)=>{
              return(
                <div className="cart-item-div">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info">
                    <h1>{item.dsc}</h1>
                    <h2>{item.country}</h2>
                    <h1>₹{item.price}</h1>
                  </div>
                  <button onClick={() => deleteByValue(item)}>Remove from Cart -</button>
                </div>
              )
            })
          }
          <h1>Total: ₹{cart.total}/-</h1>
          <Link to={'/category'}><button>Add Items to cart +</button></Link>
          <Link to={'/myorders'}><button onClick={myorder.placeOrder()}>Place Order for delivery</button></Link>
        </div>
    </div>
    </>
  )
}

export default Cart
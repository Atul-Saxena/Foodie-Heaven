import { useContext } from 'react'
import { CartContext } from '../../context/Cart'
import '../stylesheets/showdata.scss'


const Showdata = (props) => {

  const cart = useContext(CartContext);
  console.log(cart)

  const addToCart = ()=>{
    cart.setItems([
      ...cart.items,
      {
        img:props.img,
        price:props.price,
        dsc:props.dsc,
        name:props.name,
        country:props.country,
      }
    ])

    cart.setTotal(value => value+props.price)
  }

  return (
  <>
    <img  className='showdata-image' src={props.img} alt="food image" />
    <div className="datainfo">
        <h1>₹{props.price}/-</h1>
        <h2 id='dish-name'>{props.dsc}</h2>
        <h2>Shop name: {props.name}</h2>
        <h2>Location: {props.country}</h2>
        <h2>Ratings: {props.rate}</h2>
    </div>
      <button onClick={addToCart}>Add to Cart +</button>
  </>

  )
}

export default Showdata
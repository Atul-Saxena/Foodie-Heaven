import { useState, createContext, useContext } from "react"; 
import { CartContext } from './Cart'

export const myorderContext = createContext(null);

export const OrderProvider = (props)=>{
    const [orders, setOrders] = useState([]);
    const cart = useContext(CartContext);

    const placeOrder = () => {
        const cartItems = cart.items
        setOrders(cartItems);
    };

    const Total = cart.total
    return(
        <myorderContext.Provider value={{placeOrder, orders ,Total}}>
            {props.children}
        </myorderContext.Provider>
    )
}
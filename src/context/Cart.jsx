import {createContext, useState} from 'react'

export const CartContext = createContext(null);

export const CartProvider = (props)=>{
    const [items,setItems] = useState([])
    const [total,setTotal] = useState(0)
    return( 
    <CartContext.Provider value={{items,setItems,total,setTotal}}>
        {props.children}
    </CartContext.Provider>
    )
}

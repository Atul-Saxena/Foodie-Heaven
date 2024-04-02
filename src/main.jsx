import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { OrderProvider } from './context/MyOrders.jsx'
import { CartProvider } from './context/Cart.jsx'
import { FirbaseProvider } from './context/Firebase.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirbaseProvider>
      <CartProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
      </CartProvider>
    </FirbaseProvider>
  </React.StrictMode>,
)

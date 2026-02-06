import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { Routes, Route } from 'react-router'
import { OrdersPage } from './pages/orders/OrdersPage'
import { Tracking } from './pages/Tracking'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [ cart, setCart ] = useState([])

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data)
  };

  useEffect(() => {
    loadCart();
  }, []);


  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} /> 
      <Route path="orders" element={<OrdersPage cart={cart} />} /> 
      <Route path="tracking" element={<Tracking />} /> 
    </Routes>
  )
}

export default App

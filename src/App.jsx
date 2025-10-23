import HomePage from './pages/home/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/ordenes/OrdersPage';
import TrackingPage from './pages/tracking/TrackingPage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [carrito, setCarrito] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/carrito')
      .then((response) => {
        setCarrito(response.data)
      });

    }, [])

        
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage carrito={carrito}/>} />
        <Route path='checkout' element={<CheckoutPage carrito={carrito}/>} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='tracking' element={<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App

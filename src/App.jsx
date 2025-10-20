import HomePage from './pages/HomePage';
import CheckoutPage from './CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='tracking' element={<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App

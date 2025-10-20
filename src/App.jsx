import HomePage from './pages/HomePage';
import CheckoutPage from './CheckoutPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Routes>
    </>
  )
}

export default App

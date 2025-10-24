import Header from "../../components/Header";
// import productos from '../productos.json'
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";


import "./HomePage.css";

function HomePage({carrito}) {

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/productos')
      .then((response) => {
        setProductos(response.data)
    });

  }, []);

  return (
    <>
      <title>Ecommerce React 25234</title>
      <Header carrito={carrito}/>
      <div className="home-page">
      <ProductsGrid productos={productos}/>
      </div>
    </>
  );
}

export default HomePage;

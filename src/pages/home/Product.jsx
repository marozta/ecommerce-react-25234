import React from "react";
import { useState } from "react";
import axios from "axios";

function Product({producto}) {

    const [ cantidad, setCantidad ] = useState(1);


  return (

    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={producto.url_imagen} />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {producto.nombre}
      </div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`imgs/ratings/rating-${producto.ratingStars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {producto.ratingCount}
        </div>
      </div>
      {/*  */}

      <div className="product-price">{producto.precio}</div> {/*{formatmoney(producto.precio)}*/}

      <div className="product-quantity-container">
        <select
          value={cantidad}
          onChange={(event) => {
            const cantidadSelecionada = Number(event.target.value);
            setCantidad(cantidadSelecionada);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Agregado
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={() => {
          axios.post("http://localhost:5000/carritos", {
            productoId: producto.id,
            cantidad: cantidad,
            usuarioId: 1
          });
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Product;

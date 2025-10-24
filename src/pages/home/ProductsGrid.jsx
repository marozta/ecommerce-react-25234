import axios from "axios";
import React from "react";

function ProductGrid({productos}) {
  return (
    <>
      <div className="products-grid">
        {productos.map((producto) => {
          return (
            <div key={producto.id} className="product-container">
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

              <div className="product-price">{producto.precio}</div>

              <div className="product-quantity-container">
                <select>
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

              <button className="add-to-cart-button button-primary" 
                onClick={() => {
                    axios.post('http://localhost:5000/carrito', {
                      productId: producto.id,
                      cantidad: 1
                    })
                }}>
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductGrid;

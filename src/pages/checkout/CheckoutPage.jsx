import './checkout-header.css'
import "./CheckoutPage.css";

function CheckoutPage({ carrito }) {

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <h3>Talento Store</h3>
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="imgs/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Revise su orden</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {carrito.map((itemCarrito) => {
              return (
                <div key={itemCarrito.productoId} className="cart-item-container">
                  <div className="delivery-date">
                    Día de entrega: Martes, Noviembre 11
                  </div>

                  <div className="cart-item-details-grid">
                    <img
                      className="product-image"
                      src={itemCarrito.producto.url_imagen}
                    />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {itemCarrito.producto.nombre}
                      </div>
                      <div className="product-price">${itemCarrito.producto.precio}</div>
                      <div className="product-quantity">
                        <span>
                          Cantidad: <span className="quantity-label">{itemCarrito.cantidad}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Actualizar
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Eliminar
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Elige un opción de entrega:
                      </div>
                      <div className="delivery-option">
                        <input
                          type="radio"
                          checked
                          className="delivery-option-input"
                          name="delivery-option-1"
                        />
                        <div>
                          <div className="delivery-option-date">
                            Martes, Noviembre 11
                          </div>
                          <div className="delivery-option-price">
                            Envío GRATIS
                          </div>
                        </div>
                      </div>
                      <div className="delivery-option">
                        <input
                          type="radio"
                          className="delivery-option-input"
                          name="delivery-option-1"
                        />
                        <div>
                          <div className="delivery-option-date">
                            Lunes, Noviembre 10
                          </div>
                          <div className="delivery-option-price">
                            $4.99 - Envío
                          </div>
                        </div>
                      </div>
                      <div className="delivery-option">
                        <input
                          type="radio"
                          className="delivery-option-input"
                          name="delivery-option-1"
                        />
                        <div>
                          <div className="delivery-option-date">
                            Viernes, Noviembre 7
                          </div>
                          <div className="delivery-option-price">
                            $9.99 - Shipping
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Resumen de la compra</div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Preparación &amp; Envío:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total sin impuestos:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Impuestos estimados (21%):</div>
              <div className="payment-summary-money">$10.02</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Total de la orden:</div>
              <div className="payment-summary-money">$57.76</div>
            </div>

            <button className="place-order-button button-primary">
              Haga su pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;

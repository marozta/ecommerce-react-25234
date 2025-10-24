import { Link } from 'react-router-dom';
import './header.css';

function Header({carrito}) {

  let cantidadTotal = 0;

  carrito.forEach((itemCarrito) => {
    cantidadTotal += itemCarrito.cantidad
    
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <h3>Talento Store</h3>
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="imgs/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Ordenes</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="imgs/icons/cart-icon.png" />
            <div className="cart-quantity">{cantidadTotal}</div>
            <div className="cart-text">Carrito</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;

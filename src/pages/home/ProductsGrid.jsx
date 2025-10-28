
import React from "react";
import Product from "./Product";

function ProductGrid({productos}) {

  
  return (
    <div className="products-grid">
      {productos.map((producto) => (
        <Product
          key={producto.id}
          producto={producto}   
          usuarioId={1}
        />
      ))}
    </div>
  );
}

export default ProductGrid;

import React, { useState } from 'react';

export default function ProductItem({ product, onAddToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
      <div onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
        {product.name}
      </div>
      {showDetails && <p>{product.description}</p>}
      <div>${product.price}</div>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}


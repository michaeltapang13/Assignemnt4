import React from 'react';

export default function CartItem({ item, onRemove }) {
  return (
    <div>
      <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total: ${item.price * item.quantity}</div>
      <button onClick={() => onRemove(item)}>Remove item</button>
    </div>
  );
}

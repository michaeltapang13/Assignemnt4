import React from 'react';
import CartItem from './CartItem';

export default function Cart({ cartItems, onAdd, onRemove }) {
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <div>Total(in cart): $0.00</div>}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} />
      ))}
      {cartItems.length !== 0 && (
        <>
          <div>Total Price: ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}
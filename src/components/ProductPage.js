import React, { useState, useEffect } from 'react';
import Header from './Header'; // Adjust the import path as needed
import ProductList from './ProductList'; // Adjust the import path as needed
import Cart from './Cart'; // Adjust the import path as needed
import Footer from './Footer'; // Adjust the import path as needed

export default function ProductPage() {
  // State to store the cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if(storedCartItems)
      setCartItems(JSON.parse(storedCartItems))
    
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(cartItems)
  }, [cartItems]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item));
    }
  };

  return (
    <div className="product-page">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <ProductList onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />
      </div>
      <Footer />
    </div>
  );
}


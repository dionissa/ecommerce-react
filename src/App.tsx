import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Cards';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedItems);
  }, []);

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetail onAddToCart={handleAddToCart} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart cartItems={cartItems} /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />}
/>
</Routes>
</Router>
);
};

export default App;
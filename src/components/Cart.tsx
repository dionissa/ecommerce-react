import React from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <p className="text-lg font-semibold">${item.price * item.quantity}</p>
            </div>
          ))}
          <div className="flex items-center justify-between mt-8">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-semibold">${totalPrice}</p>
          </div>
          <button onClick={handleCheckout} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-8 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from "react";

const Cart = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", quantity: 2, price: 500 },
    { id: 2, name: "Product B", quantity: 1, price: 300 },
    { id: 3, name: "Product C", quantity: 3, price: 200 },
  ]);

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  // Function to increase the quantity of a product
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of a product
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove a product from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to handle checkout
  const handleCheckout = () => {
    alert("Checkout successful! Thank you for your purchase.");
    setCartItems([]); // Clear the cart after checkout
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Table for larger screens */}
          <div className="hidden md:block">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Product</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Subtotal</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2">₹{item.price}</td>
                    <td className="py-2">₹{item.quantity * item.price}</td>
                    <td className="py-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* List for smaller screens */}
          <div className="md:hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
 onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="mt-2">Subtotal: ₹{item.quantity * item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-right mt-4">
            <h2 className="text-xl font-bold">Total: ₹{calculateTotal()}</h2>
            <button
              onClick={handleCheckout}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
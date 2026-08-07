import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    setCart((currentCart) => {
      console.log("Carrito actual:", currentCart);

      const productInCart = currentCart.find(
        (item) => item._id === product._id
      );

      if (productInCart) {
        const updatedCart = currentCart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

        console.log("Carrito actualizado:", updatedCart);

        return updatedCart;
      }

      const newCart = [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];

      console.log("Nuevo carrito:", newCart);

      return newCart;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item._id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item._id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        cartQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
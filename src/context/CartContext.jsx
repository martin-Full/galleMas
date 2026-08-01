import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (product) => {
    setCart((currentCart) => {
      const productInCart = currentCart.find(
        (item) => item.id === product.id,
      )

      if (productInCart) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        )
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    )
  }

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

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
  )
}

function useCart() {
  return useContext(CartContext)
}

export { CartProvider, useCart }
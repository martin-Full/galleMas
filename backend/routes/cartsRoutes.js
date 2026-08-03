const express = require("express");
const router = express.Router();

const {
  createCart,
  getCartById,
  addProductToCart,
  removeProductFromCart,
  updateCart,
  updateProductQuantity,
  clearCart
} = require("../controllers/cartsController");

// Crear carrito
router.post("/", createCart);

// Obtener carrito por ID
router.get("/:cid", getCartById);

// Agregar producto
router.post("/:cid/products/:pid", addProductToCart);

// Eliminar producto del carrito
router.delete("/:cid/products/:pid", removeProductFromCart);

// Actualizar carrito completo
router.put("/:cid", updateCart);

// Actualizar cantidad de un producto
router.put("/:cid/products/:pid", updateProductQuantity);

// Vaciar carrito
router.delete("/:cid", clearCart);

module.exports = router;
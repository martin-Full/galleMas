const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Crear carrito
const createCart = async (req, res) => {
  try {
    const newCart = await Cart.create({ products: [] });

    res.status(201).json({
      status: "success",
      cart: newCart
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

// Obtener carrito por ID
const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.cid).populate("products.product");

    if (!cart) {
      return res.status(404).json({
        status: "error",
        message: "Carrito no encontrado"
      });
    }

    res.json({
      status: "success",
      cart
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

// Agregar producto al carrito
const addProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const cart = await Cart.findById(cid);

    if (!cart) {
      return res.status(404).json({
        status: "error",
        message: "Carrito no encontrado"
      });
    }

    const product = await Product.findById(pid);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado"
      });
    }

    const existingProduct = cart.products.find(
      item => item.product.toString() === pid
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.products.push({
        product: pid,
        quantity: 1
      });
    }

    await cart.save();

    res.json({
      status: "success",
      message: "Producto agregado al carrito",
      cart
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

module.exports = {
  createCart,
  getCartById,
  addProductToCart
};
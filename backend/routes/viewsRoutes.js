const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const Cart = require("../models/Cart");

// Vista de productos
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().lean();

    res.render("home", {
      title: "Productos",
      products
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Vista detalle
router.get("/products/:pid", async (req, res) => {
  try {
    const product = await Product.findById(req.params.pid).lean();

    if (!product) {
      return res.status(404).send("Producto no encontrado");
    }

    res.render("product", {
      title: product.title,
      product
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Vista carrito
router.get("/carts/:cid", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.cid)
      .populate("products.product")
      .lean();

    if (!cart) {
      return res.status(404).send("Carrito no encontrado");
    }

    res.render("cart", {
      title: "Carrito",
      cart
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
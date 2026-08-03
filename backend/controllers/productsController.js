const Product = require("../models/Product");

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    let { page = 1, limit = 10, sort, query } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const filter = {};

    if (query) {
      filter.category = query;
    }

    let productsQuery = Product.find(filter);

    if (sort === "asc") {
      productsQuery = productsQuery.sort({ price: 1 });
    } else if (sort === "desc") {
      productsQuery = productsQuery.sort({ price: -1 });
    }

    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await productsQuery
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      status: "success",
      payload: products,
      totalPages,
      prevPage: page > 1 ? page - 1 : null,
      nextPage: page < totalPages ? page + 1 : null,
      page,
      hasPrevPage: page > 1,
      hasNextPage: page < totalPages,
      prevLink: page > 1 ? `/api/products?page=${page - 1}` : null,
      nextLink: page < totalPages ? `/api/products?page=${page + 1}` : null
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

// GET /api/products/:pid
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.pid);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado"
      });
    }

    res.json({
      status: "success",
      payload: product
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

// POST /api/products
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      payload: product
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

// PUT /api/products/:pid
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.pid,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado"
      });
    }

    res.json({
      status: "success",
      payload: product
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

// DELETE /api/products/:pid
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.pid);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado"
      });
    }

    res.json({
      status: "success",
      message: "Producto eliminado correctamente"
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
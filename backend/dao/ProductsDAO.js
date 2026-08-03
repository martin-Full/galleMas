const Product = require("../models/Product");

class ProductsDAO {
  async getAll(filter = {}, options = {}) {
    return await Product.find(filter, null, options);
  }

  async getById(id) {
    return await Product.findById(id);
  }

  async create(product) {
    return await Product.create(product);
  }

  async update(id, product) {
    return await Product.findByIdAndUpdate(id, product, {
      new: true
    });
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductsDAO();
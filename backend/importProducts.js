require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");
const products = require("./data/products");

const importProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Conectado a MongoDB");

    await Product.deleteMany();

    const formattedProducts = products.map((p, index) => ({
      title: p.name,
      description: p.brand,
      code: `COD${index + 1}`,
      price: p.price,
      status: true,
      stock: p.stock,
      category: p.category,
      thumbnails: [p.image]
    }));

    await Product.insertMany(formattedProducts);

    console.log("🎉 Productos importados correctamente");

    process.exit();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importProducts();
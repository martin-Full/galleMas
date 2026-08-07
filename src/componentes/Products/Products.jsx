import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ProductCard from "../ProductCard/ProductCard";

const socket = io("http://localhost:8080");

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.payload);
      });

    socket.on("connect", () => {
      console.log("✅ Socket conectado:", socket.id);
    });

    socket.on("productsUpdated", (products) => {
      console.log("🔥 Productos actualizados", products);
      setProducts(products);
    });

    return () => {
      socket.off("connect");
      socket.off("productsUpdated");
    };
  }, []);

  return (
    <section id="productos" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black mb-10">
        Productos ({products.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
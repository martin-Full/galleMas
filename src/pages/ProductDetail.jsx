import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.payload))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Cargando producto...
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <img
            src={product.thumbnails?.[0]}
            alt={product.title}
            className="w-full h-[420px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">

          <span className="text-sm uppercase text-[#C5573F] font-bold">
            {product.category}
          </span>

          <h1 className="text-5xl font-black text-[#4A2105] mt-2">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            {product.description}
          </p>

          <h2 className="text-4xl font-black text-[#C5573F] mt-8">
            ${product.price.toLocaleString("es-AR")}
          </h2>

          <p className="mt-3 text-lg">
            Stock disponible:
            <span className="font-bold">
              {" "}
              {product.stock}
            </span>
          </p>

          <button
            onClick={() => addItem(product)}
            className="mt-10 flex items-center justify-center gap-3 rounded-full bg-[#4A2105] py-4 text-white font-bold text-lg transition hover:bg-[#C5573F]"
          >
            <ShoppingBag size={24} />
            Agregar al carrito
          </button>

        </div>

      </div>
    </section>
  );
}

export default ProductDetail;
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#4A2105]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <Link to={`/product/${product._id}`}>

        <div className="relative aspect-square overflow-hidden bg-[#F3E6D6]/50">

          <img
            src={product.thumbnails?.[0]}
            alt={product.title}
            className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold capitalize text-[#C5573F] shadow-sm">
            {product.category}
          </span>

        </div>

      </Link>

      <div className="p-6">

        <Link
          to={`/product/${product._id}`}
          className="no-underline"
        >
          <h3 className="mt-1 text-xl font-bold text-[#4A2105] hover:text-[#C5573F] transition">
            {product.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <div>

            <p className="text-2xl font-black text-[#C5573F]">
              ${product.price.toLocaleString("es-AR")}
            </p>

            <p className="text-sm text-gray-500">
              Stock: {product.stock}
            </p>

          </div>

          <button
            onClick={() => addItem(product)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A2105] text-white transition hover:scale-105 hover:bg-[#C5573F]"
          >
            <ShoppingBag size={20} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;
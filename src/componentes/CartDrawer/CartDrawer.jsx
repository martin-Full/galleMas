import { useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    cartQuantity,
    cartTotal,
  } = useCart();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#FBF6EF] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#4A2105]/10 px-6 py-5">
          <div>
            <h2 className="text-2xl font-black text-[#4A2105]">
              Tu carrito
            </h2>

            <p className="mt-1 text-sm text-[#2D211B]/60">
              {cartQuantity} productos
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-3 hover:bg-[#F3E6D6]"
          >
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <h2 className="text-xl font-bold">
              Tu carrito está vacío
            </h2>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.map((item) => (
                <article
                  key={item._id}
                  className="flex gap-4 rounded-3xl bg-white p-4 shadow-sm"
                >
                  <img
                    src={item.thumbnails?.[0]}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl object-contain"
                  />

                  <div className="flex flex-1 flex-col">
                    <h3 className="font-bold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() =>
                            decreaseQuantity(item._id)
                          }
                        >
                          <Minus size={18} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            increaseQuantity(item._id)
                          }
                        >
                          <Plus size={18} />
                        </button>

                      </div>

                      <button
                        onClick={() =>
                          removeItem(item._id)
                        }
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                    <h4 className="mt-2 font-bold text-[#C5573F]">
                      $
                      {(
                        item.price * item.quantity
                      ).toLocaleString("es-AR")}
                    </h4>

                  </div>
                </article>
              ))}
            </div>

            <div className="border-t p-6">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>
                  $
                  {cartTotal.toLocaleString("es-AR")}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-5 w-full rounded-full bg-[#C5573F] py-4 text-white font-bold"
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
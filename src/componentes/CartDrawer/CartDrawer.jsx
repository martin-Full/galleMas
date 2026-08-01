import { useNavigate } from 'react-router-dom'



import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'

import { useCart } from '../../context/CartContext'

function CartDrawer ({ isOpen, onClose }) {
    const navigate = useNavigate()
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    cartQuantity,
    cartTotal,
  } = useCart()
  const handleCheckout = () => {
  onClose()
  navigate('/checkout')
}

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#FBF6EF] shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#4A2105]/10 px-6 py-5">
          <div>
            <h2 className="text-2xl font-black text-[#4A2105]">
              Tu carrito
            </h2>

            <p className="mt-1 text-sm text-[#2D211B]/60">
              {cartQuantity} productos en tu compra
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="rounded-full p-3 text-[#4A2105] transition hover:bg-[#F3E6D6]"
          >
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F3E6D6] text-[#C5573F]">
              <ShoppingBag size={34} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#4A2105]">
              Tu carrito está vacío
            </h3>

            <p className="mt-2 max-w-xs text-[#2D211B]/60">
              Agregá tus galletitas favoritas y aparecerán acá.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-[#C5573F] px-6 py-3 font-bold text-white transition hover:bg-[#AD4936]"
            >
              Ver productos
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 rounded-3xl bg-white p-4 shadow-sm"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F3E6D6]/60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-[#2D211B]/50">
                          {item.brand}
                        </p>

                        <h3 className="font-bold text-[#4A2105]">
                          {item.name}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Eliminar ${item.name}`}
                        className="rounded-full p-2 text-[#C5573F] transition hover:bg-[#C5573F]/10"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-3">
                      <div className="flex items-center rounded-full border border-[#4A2105]/10">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-2 text-[#4A2105]"
                          aria-label={`Restar una unidad de ${item.name}`}
                        >
                          <Minus size={16} />
                        </button>

                        <span className="min-w-8 text-center text-sm font-bold text-[#4A2105]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="p-2 text-[#4A2105]"
                          aria-label={`Agregar una unidad de ${item.name}`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-black text-[#C5573F]">
                        $
                        {(item.price * item.quantity).toLocaleString(
                          'es-AR',
                        )}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
    <div className="border-t border-[#4A2105]/10 bg-white p-6">
    <div className="flex items-center justify-between">
    <span className="text-[#2D211B]/60">Subtotal</span>
    <span className="text-2xl font-black text-[#4A2105]">${cartTotal.toLocaleString('es-AR')}</span>
    </div>
    <p className="mt-2 text-xs text-[#2D211B]/50">  El costo de envío se calculará según la zona de entrega.</p>
    <button type="button" onClick={handleCheckout}
    className="mt-5 w-full rounded-full bg-[#C5573F] px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#AD4936]">
    Finalizar compra</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
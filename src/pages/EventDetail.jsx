import { useParams } from "react-router-dom";
import events from "../data/events";
import { useAtom } from "jotai";
import { cartAtom } from "../store/cartStore";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "sonner";
import usePageTitle from "../hooks/usePageTitle";

const EventDetail = () => {
  const { title } = useParams();
  const [cart, setCart] = useAtom(cartAtom);
  const [quantity, setQuantity] = useState(1);

  const event = events.find((e) => e.title === title);

  const handleAddToCart = () => {
    setCart([...cart, { ...event, quantity }]);
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  usePageTitle(title);

  return (
    <section className="container mx-auto px-6 lg:px-10 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full rounded-lg"
          />
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-lg font-semibold text-green-600">
            Rp {event.price.toLocaleString()}
          </p>
          <p className="text-gray-500">📅 {event.date}</p>
          <p className="text-gray-500">📍 {event.location}</p>
          <p className="mt-4 text-gray-700">{event.description}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="font-bold text-lg">Beli Tiket</h3>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Harga Satuan</span>
            <span className="font-semibold text-green-600">
              Rp {event.price.toLocaleString()}
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Jumlah Tiket
            </label>
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 bg-red-200 rounded-full flex items-center text-gray-700 justify-center text-lg font-bold hover:bg-red-300"
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-4 py-2 bg-green-200 rounded-full flex items-center text-gray-700 justify-center text-lg font-bold hover:bg-green-300"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold text-indigo-600">
              Rp {(event.price * quantity).toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => {
              handleAddToCart();
              toast.success("Tiket Berhasil Ditambahkan!");
            }}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 toast-button"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;

import { useAtom } from "jotai";
import React, { useState } from "react";
import { cartAtom } from "../store/cartStore";
import { toast } from "sonner";
import usePageTitle from "../hooks/usePageTitle";

const Checkout = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "transfer",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCheckout = {
      ...formData,
      cartItems: cart,
      subtotal,
      date: new Date().toISOString(),
    };

    const existingData = JSON.parse(localStorage.getItem("checkoutData")) || [];

    const updatedData = [...existingData, newCheckout];

    localStorage.setItem("checkoutData", JSON.stringify(updatedData));

    toast.success("Checkout berhasil!");
    setCart([]);

    setFormData({
      name: "",
      phone: "",
      email: "",
      paymentMethod: "transfer",
    });
  };

  usePageTitle("Checkout");

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {!cart || cart.length === 0 ? (
        <p className="text-center">Cart Kosong</p>
      ) : (
        <>
          <table className="w-full border border-gray-200 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-center border rounded-tl-2xl">Event</th>
                <th className="p-2 text-center border">Tanggal</th>
                <th className="p-2 text-center border">Lokasi</th>
                <th className="p-2 text-center border">Harga</th>
                <th className="p-2 text-center border">Qty</th>
                <th className="p-2 text-center border rounded-tr-2xl">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 border text-center">{item.title}</td>
                  <td className="p-2 border text-center">{item.date}</td>
                  <td className="p-2 border text-center">{item.location}</td>
                  <td className="p-2 border text-center">
                    Rp {item.price.toLocaleString()}
                  </td>
                  <td className="p-2 border text-center">{item.quantity}</td>
                  <td className="p-2 border text-center">
                    Rp {(item.price * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-right font-semibold p-2">
                  Subtotal
                </td>
                <td className="text-center font-bold p-2">
                  Rp {subtotal.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 border p-4 rounded-lg shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Nomor HP</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Metode Pembayaran
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              >
                <option value="transfer">Transfer Bank</option>
                <option value="ewallet">E-Wallet</option>
                <option value="credit">Kartu Kredit</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md"
            >
              Bayar Sekarang
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";

const MyTicket = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("checkoutData");
    if (storedData) {
      setTickets(JSON.parse(storedData));
    }
  }, []);

  usePageTitle("My Tickets");

  return (
    <section className="container mx-auto px-6 lg:px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">My Tickets</h1>

      {tickets.length === 0 ? (
        <p className="text-gray-500">Tidak ada tiket yang tersimpan.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 flex flex-col gap-4"
            >
              <div>
                <h2 className="text-lg font-semibold">{ticket.name}</h2>
                <p className="text-sm text-gray-600 flex items-center gap-2 my-2">
                  <FaWhatsapp size={20} /> {ticket.phone}
                </p>
                <p className="text-sm text-gray-600">✉️ {ticket.email}</p>
              </div>

              {/* Daftar Tiket */}
              {ticket.cartItems && ticket.cartItems.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ticket.cartItems.map((event, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-50 p-3 rounded-md border border-gray-100 flex flex-col gap-1"
                    >
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-xs text-gray-500">
                        📅 {event.date} | 📍 {event.location}
                      </p>
                      <p className="text-sm font-bold text-indigo-600">
                        Rp {event.price.toLocaleString()} × {event.quantity}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyTicket;

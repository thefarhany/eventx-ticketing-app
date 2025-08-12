import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-3 text-white">EventX</h2>
          <p className="text-sm leading-relaxed">
            Platform pemesanan tiket event terbaik untuk musik, olahraga, dan
            hiburan lainnya. Temukan acara favoritmu dan pesan tiket dengan
            mudah.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-indigo-400">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-indigo-400">
                Events
              </a>
            </li>
            <li>
              <a href="/my-tickets" className="hover:text-indigo-400">
                My Tickets
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-indigo-400">
                Cart
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">Contact Us</h3>
          <p className="text-sm">📍 Jl. Contoh No. 123, Jakarta</p>
          <p className="text-sm">📞 +62 812 3456 7890</p>
          <p className="text-sm">✉️ support@eventx.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} EventX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import {
  FaShoppingCart,
  FaTicketAlt,
  FaTrashAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cartAtom } from "../../store/cartStore";
import { toast } from "sonner";

const Navbar = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef(null);
  const location = useLocation();

  const totalTickets = cart.reduce((acc, item) => acc + item.quantity, 0);

  const clearCart = () => setCart([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup menu ketika berpindah halaman
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "My Tickets", path: "/my-tickets" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-indigo-600"
        >
          <FaTicketAlt size={20} />
          EventX
        </Link>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="bg-indigo-600 p-2 rounded-full text-white relative"
          >
            <FaShoppingCart size={16} />
            {totalTickets > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {totalTickets}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-gray-700"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-indigo-500 transition ${
                    isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li ref={cartRef}>
            <button
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="bg-indigo-600 py-2 px-3 text-white rounded-full relative"
            >
              <FaShoppingCart size={16} />
              {totalTickets > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalTickets}
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-700"
                    } hover:text-indigo-500`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div
          ref={cartRef}
          className="absolute right-4 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50"
        >
          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm">Keranjang kosong</p>
          ) : (
            <>
              <ul className="space-y-3 max-h-60 overflow-auto">
                {cart.map((item, idx) => (
                  <li
                    key={item.title ?? idx}
                    className="flex justify-between items-start gap-3 border-b pb-3"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × Rp {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-indigo-600">
                        Rp {(item.quantity * item.price).toLocaleString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex gap-2">
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-indigo-600 w-full py-2 rounded-md text-white text-sm text-center font-semibold"
                >
                  Checkout
                </Link>
                <button
                  onClick={() => {
                    clearCart();
                    toast.success("Cart Kosong");
                  }}
                  className="px-3 py-1 bg-red-400 text-white rounded-md text-xs"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

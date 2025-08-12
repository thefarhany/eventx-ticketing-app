import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Not Found");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <img
        src="https://illustrations.popsy.co/violet/falling.svg"
        alt="404 Not Found"
        className="w-72 mb-6"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        Silakan kembali ke halaman utama dan jelajahi event menarik lainnya.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        <FaArrowLeft /> Kembali ke Beranda
      </Link>
    </section>
  );
};

export default NotFound;

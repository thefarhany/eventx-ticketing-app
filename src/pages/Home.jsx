import React from "react";
import {
  FaBusinessTime,
  FaFilm,
  FaHeartbeat,
  FaMusic,
  FaPalette,
  FaPallet,
  FaRunning,
} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import events from "../data/events";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardEvent from "../components/ui/CardEvent";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  const categoryIcons = {
    Music: <FaMusic size={28} />,
    Food: <FaBowlFood size={28} />,
    Business: <FaBusinessTime size={28} />,
    Sports: <FaRunning size={28} />,
    Culture: <FaPallet size={28} />,
    Entertainment: <FaFilm size={28} />,
    Wellness: <FaHeartbeat size={28} />,
    Art: <FaPalette size={28} />,
    Fashion: <FaPalette size={28} />,
  };

  const categories = [...new Set(events.map((event) => event.category))].slice(
    0,
    6
  );

  const highlightEvents = events.slice(0, 3);

  usePageTitle("Home");

  return (
    <div className="space-y-16 pb-10">
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Temukan & Pesan Tiket Event Favoritmu
          </motion.h1>
          <motion.p
            className="mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Musik, olahraga, kuliner, seni, dan masih banyak lagi!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/events"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
            >
              Lihat Semua Event
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Kategori Populer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow hover:shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
            >
              <Link to={`events/category/${category.toLowerCase()}`}>
                <div className="text-indigo-600 mb-3 flex flex-col items-center text-center">
                  {categoryIcons[category] || <FaPalette size={28} />}
                </div>
                <span className="font-medium">{category}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Highlight Event Minggu Ini
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlightEvents.map((event, index) => (
            <CardEvent event={event} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

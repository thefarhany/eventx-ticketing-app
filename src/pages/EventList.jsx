import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import events from "../data/events";
import CardEvent from "../components/ui/CardEvent";
import { categoriesData } from "../data/categories";
import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const EventList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  usePageTitle("All Events");

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
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-10">
        <div className="flex gap-4 flex-wrap">
          <div
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 border rounded-lg cursor-pointer transition 
            ${
              selectedCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <p className="text-sm font-semibold">All</p>
          </div>

          {categoriesData.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 border rounded-lg cursor-pointer transition 
              ${
                selectedCategory === category.name
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <p className="text-sm font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <CardEvent event={event} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventList;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CardEvent = ({ event, index }) => {
  return (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden"
    >
      <img
        src={event.image}
        alt={event.title}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-col p-4">
        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {event.location} • {new Date(event.date).toLocaleDateString("id-ID")}
        </p>
        <p className="text-indigo-600 font-bold mb-4">
          Rp {event.price.toLocaleString("id-ID")}
        </p>
        <Link
          to={`/event/detail/${event.title}`}
          className="bg-indigo-600 text-white text-sm font-semibold text-center px-4 py-2 rounded-full hover:bg-indigo-500 transition"
        >
          Lihat Detail
        </Link>
      </div>
    </motion.div>
  );
};

export default CardEvent;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import EventList from "./pages/EventList";
import Checkout from "./pages/Checkout";
import MyTicket from "./pages/MyTicket";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import NotFound from "./pages/NotFound";
import EventCategory from "./pages/EventCategory";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Toaster
        position="bottom-right"
        richColors
        theme="dark"
        duration={2000}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/detail/:title" element={<EventDetail />} />
          <Route path="/events" element={<EventList />} />
          <Route
            path="/events/category/:category"
            element={<EventCategory />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-tickets" element={<MyTicket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

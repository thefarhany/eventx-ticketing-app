import { useParams } from "react-router-dom";
import events from "../data/events";
import CardEvent from "../components/ui/CardEvent";
import { categoriesData } from "../data/categories";
import usePageTitle from "../hooks/usePageTitle";

const EventCategory = () => {
  const { category } = useParams();

  const categoryInfo = categoriesData.find(
    (cat) => cat.slug.toLowerCase() === category
  );

  const categoryEvents = events.filter(
    (event) => event.category.toLowerCase() === category
  );

  usePageTitle(
    `${category.charAt(0).toUpperCase() + category.slice(1)} Events`
  );

  return (
    <div className="spacy-y-16 pb-10">
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h1 className="text-4xl font-bold capitalize">
            {categoryInfo?.name || category}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            {categoryInfo?.description ||
              "Explore amazing events in this category."}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {categoryEvents.map((event, index) => (
            <CardEvent event={event} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventCategory;

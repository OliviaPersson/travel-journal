import { getTravelData } from "../data";
import DestinationCard from "./DestinationCard";
import "./TravelDestinations.css";

const TravelDestinations = () => {
  const traveldata = [...getTravelData()];
  console.log(traveldata);

  return (
    <section className="travel-container">
      {traveldata.map((destination) => {
        return (
          <DestinationCard
            key={destination.id}
            title={destination.title}
            description={destination.description}
            endDate={destination.endDate}
            startDate={destination.startDate}
            googleMapsUrl={destination.googleMapsUrl}
            location={destination.location}
            imageUrl={destination.imageUrl}
          />
        );
      })}
    </section>
  );
};

export default TravelDestinations;

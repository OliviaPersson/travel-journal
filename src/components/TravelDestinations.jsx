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
          <DestinationCard key={destination.id} destination={destination} />
        );
      })}
    </section>
  );
};

export default TravelDestinations;

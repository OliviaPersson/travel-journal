import locationSymbol from "../images/location-symbol.png";
import "./DestinationCard.css";

const DestinationCard = ({
  title,
  description,
  endDate,
  startDate,
  googleMapsUrl,
  location,
  imageUrl,
}) => {
  return (
    <div className="destination-container">
      <img className="destination-image" src={imageUrl} />
      <section className="text-content-container">
        <div className="location-container">
          <img className="location-symbol" src={locationSymbol} />
          <p className="location-text">{location}</p>
          <a href={googleMapsUrl} className="location-link">
            View on Google Maps
          </a>
        </div>
        <h1 className="destination-header">{title}</h1>
        <p className="travel-date">
          {startDate} - {endDate}
        </p>
        <p className="destination-description">{description}</p>
      </section>
    </div>
  );
};

export default DestinationCard;

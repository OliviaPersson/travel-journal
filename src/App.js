import React from "react";
import Navbar from "./components/Navbar";
import DestinationCard from "./components/DestinationCard";
import TravelDestinations from "./components/TravelDestinations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <TravelDestinations />
    </div>
  );
}

export default App;

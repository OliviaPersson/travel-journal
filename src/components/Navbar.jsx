import travelJournalLogo from "../images/navbar-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={travelJournalLogo}></img>
      <p className="navbar-text">my travel journal.</p>
    </div>
  );
};

export default Navbar;

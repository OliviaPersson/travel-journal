import travelJournalLogo from "../images/navbar-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={travelJournalLogo}></img>
      <h3 className="navbar-text">my travel journal.</h3>
    </div>
  );
};

export default Navbar;

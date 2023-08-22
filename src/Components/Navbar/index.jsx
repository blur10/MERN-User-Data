import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Navbar;

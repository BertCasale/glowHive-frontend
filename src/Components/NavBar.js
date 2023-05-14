import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import "./NavBar.css";
import Logo from "../assets/GlowHiveLogoTransparent.png";

export default function NavBar() {
  return (
    <nav className="NavBar text-center">
      <div>
        <Link to="/products">
          <img src={Logo} alt="Glow Hive" width="200px" />
        </Link>
      </div>
      <div>
        <Link to="/products">
          <button>Home</button>
        </Link>
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div>
        <Link to="/products/new">
          <button>Add New</button>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </nav>
  );
}

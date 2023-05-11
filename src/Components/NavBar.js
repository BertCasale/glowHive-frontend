import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
export default function NavBar() {
  return (
    <nav className="NavBar">
      <SearchBar />
      <Link to="/products">
        <button>Home</button>
      </Link>

      <Link to="/products/new">
        <button>Add New</button>
      </Link>
    </nav>
  );
}

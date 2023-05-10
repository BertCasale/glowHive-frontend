import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/products">
        <button>Home</button>
      </Link>

      <Link to="/products/new">
        <button>Add New</button>
      </Link>
    </nav>
  );
}

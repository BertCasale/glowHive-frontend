import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSuggestion from "./SearchSuggestion";
import "./Searchbar.css"

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search?q=${searchTerm}`);
    setSearchTerm("");
  };

  return (<div className="Searchbar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="🔍Search"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
        <button type="submit">Search</button>
      </form>
      <SearchSuggestion searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  );
}

export default SearchBar;

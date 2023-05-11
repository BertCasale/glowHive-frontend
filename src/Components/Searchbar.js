import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  // searchTerm value from text box
  //setseacrhTerm is listening on the input(search bar to get value)
  // const { q } = useParams(); ??
  const [searchResults, setsearchResults] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(searchTerm);
    await axios
      .get(`${API}/products/search`, {
        params: { q: searchTerm },
      })
      .then((res) => {
        console.log(res);

        setsearchResults(res.data);
        navigate(`/products/search?q=${searchTerm}`);
      });
    setSearchTerm("");
  };
  // useEffect(() => {
  //  );
  // }, [searchTerm]);

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="search"
        placeholder="🔍Search"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

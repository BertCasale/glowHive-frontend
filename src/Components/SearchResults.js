import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");
  useEffect(() => {
    axios.get(`${API}/products/search?q=${q}`).then((res) => {
      setSearchResults(res.data);
    });
  }, [q]);
  return (
    <div>
      <h1>Results </h1>
      <ul>
        {searchResults.map((searchResult) => {
          console.log(searchResult);
          return (
            <li key={searchResult.id}>
              <Link to={`/products/${searchResult.id}`}>
                <h2> {searchResult.name}</h2>
                <img src={searchResult.image_url} />
                <h3>${searchResult.price}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
      <p>Testing</p>
    </div>
  );
};

export default SearchResults;

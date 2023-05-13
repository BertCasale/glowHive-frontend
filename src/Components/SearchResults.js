import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import "./SearchResults.css"
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
    <div className="SearchResults">
      <div className=" d-flex flex-wrap">
        {searchResults[0] ? 
        searchResults.map((searchResult) => {
          console.log(searchResult);
          return (
            <Product product={searchResult} key={searchResult.id}/>
          );
        }):
        <h2>No results were found. Try changing your search.</h2>}
      </div>
    </div>
  );
};

export default SearchResults;

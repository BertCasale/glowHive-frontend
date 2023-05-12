import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./SearchSuggestion.css"
const API = process.env.REACT_APP_API_URL;

export default function SearchSuggestion({searchTerm, setSearchTerm}) {
  const [allProducts, setAllProducts] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState({});

  useEffect(() => {
    axios
    .get(`${API}/products`)
    .then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  useEffect(() => {
    if (allProducts[0]) {
      let filteredProducts = allProducts.filter((product) => {
        return (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase()) || product.type.toLowerCase().includes(searchTerm));
      }
    )
    if (filteredProducts.length > 3) {
      filteredProducts = filteredProducts.slice(0,3);
    }
    
    setSuggestedProducts(filteredProducts);
    }
  }, [searchTerm, allProducts])

  const resetSearchBox = () => {
    setSearchTerm("");
  }

  return (<div className={`SearchSuggestion ${searchTerm ? "visible" : "invisible"} d-flex justify-content-center`}>
    <div className="position-absolute dropdown" >
      {!suggestedProducts[0] ?
      <span className="dropdown-item-text">No results found.</span>:
      (suggestedProducts.map((product)=> {
        return (<Link to={`/products/${product.id}`} key={product.id}>
          
          <span className="dropdown-item" onClick={resetSearchBox}><img alt={product.name} src={product.image_url}/>{product.name}</span>

        </Link>);
        }))
      }

    </div>
  </div>)
}
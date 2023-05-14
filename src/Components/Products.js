import Product from "./Product";
import Filters from "./Filters";
import "./Product.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css"
const API = process.env.REACT_APP_API_URL;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setProducts(res.data);
        setAllProducts(res.data);
      })
      .catch((e) => {
        console.warn("error", e);
      });
  }, [API]);

  return (
    <div className="Products">
      <div className="d-flex">
        <Filters setProducts={setProducts} allProducts={allProducts}/>
        <div className="all-products d-flex flex-wrap">
          
          {products[0] ? 
          products.map((product) => {
            return <Product key={product.id} product={product}/>;
          }):
          <h2>No products were found. Try changing the filters.</h2>}
          
        </div>
      </div>
    </div>
  );
}

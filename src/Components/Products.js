import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css"
const API = process.env.REACT_APP_API_URL;
console.log(API);

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.warn("error", e);
      });
  }, [API]);

  return (
    <div className="Products">

        <div className=" d-flex flex-wrap">
          
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>

    </div>
  );
}

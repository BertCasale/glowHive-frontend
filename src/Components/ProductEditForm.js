import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ProductEditForm() {
  let {id} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    image_url: "",
    price: "",
    details: "",
    size_in_oz: "",
    type: "",
    vegan: false,
    is_cruelty_free: false,
    non_toxic: false,
    ingredients: "",
  });

  useEffect(()=> {
    axios.get(`${API}/products/${id}`)
    .then((res) => {
      setProduct(res.data);
    },(error) => navigate("/not-found"))
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setProduct({...product, [event.target.id]: event.target.value})
  }

  const handleNumberChange = (event) => {
    const num = Number(event.target.value)
    setProduct({...product, [event.target.id]: num})
  }

  const handleCheckboxChange = (event) => {
    setProduct({...product, [event.target.id]: !product[event.target.id]});
  }

  const updateProduct = (updatedProduct) => {
    axios.put(`${API}/products/${id}`,updatedProduct)
    .then(() => {
      navigate(`/products/${id}`);
    },(error) => console.log(error))
    .catch((e) => console.warn("error", e));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  }

  return (<div className="ProductNewForm">
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input 
        name="name" 
        id="name" 
        required
        value={product.name}
        onChange={handleTextChange}/>

      <label htmlFor="brand">Brand</label>
      <input 
        name="brand" 
        id="brand" 
        type="text" 
        required
        value={product.brand}
        onChange={handleTextChange}/>

      <label htmlFor="image_url">Image URL:</label>
      <input 
        name="image_url" 
        id="image_url" 
        type="text" 
        required
        value={product.image_url}
        onChange={handleTextChange}/>

      <label htmlFor="price">Price:</label>
      <input 
        name="price" 
        id="price" 
        type="number" 
        required
        value={product.price}
        onChange={handleNumberChange}/>

      <label htmlFor="details">Details:</label>
      <textarea 
        name="details" 
        id="details" 
        required
        value={product.details}
        onChange={handleTextChange}/>

      <label htmlFor="size_in_oz">Size in Oz:</label>
      <input 
        name="size_in_oz" 
        id="size_in_oz" 
        type="number" 
        placeholder="000.00" 
        required
        value={product.size_in_oz}
        onChange={handleNumberChange}/>

      <label htmlFor="type">Type:</label>
      <input 
        name="type" 
        id="type" 
        type="text" 
        required
        value={product.type}
        onChange={handleTextChange}/>

      <label htmlFor="vegan">Vegan:</label>
      <input 
        name="vegan" 
        id="vegan" 
        type="checkbox"
        checked={product.vegan}
        onChange={handleCheckboxChange}/>

      <label htmlFor="is_cruelty_free">Cruelty Free:</label>
      <input 
        name="is_cruelty_free" 
        id="is_cruelty_free" 
        type="checkbox"
        checked={product.is_cruelty_free}
        onChange={handleCheckboxChange}/>

      <label htmlFor="non_toxic">Non Toxic:</label>
      <input 
        name="non_toxic" 
        id="non_toxic" 
        type="checkbox"
        checked={product.non_toxic}
        onChange={handleCheckboxChange}/>

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea 
        name="ingredients" 
        id="ingredients"
        value={product.ingredients}
        onChange={handleTextChange}/>

      <input type="submit"/>

    </form>
  </div>)
}
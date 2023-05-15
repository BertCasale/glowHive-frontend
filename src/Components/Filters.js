import { useEffect, useState } from "react";
import "./Filters.css";


const Filters = ({ setProducts, allProducts}) => {
  const [filters, setFilters] = useState({
    type: "",
    vegan: false,
    is_cruelty_free: false,
    non_toxic: false
  });
  const [itemCounts, setItemCounts] = useState({
    total: 0,
    moisturizer: 0,
    toner: 0,
    cleanser: 0,
    vegan: 0,
    non_toxic: 0,
    is_cruelty_free: 0
  });

  useEffect(() => {

    let moisturizerCount = allProducts.filter((product)=>product.type.toLowerCase()==="moisturizer").length;
    let tonerCount = allProducts.filter((product)=>product.type.toLowerCase()==="toner").length;
    let cleanserCount = allProducts.filter((product)=>product.type.toLowerCase()==="cleanser").length;
    let veganCount = allProducts.filter((product)=>product.vegan===true).length;
    let nonToxicCount = allProducts.filter((product)=>product.non_toxic===true).length;
    let crueltyFreeCount = allProducts.filter((product)=>product.is_cruelty_free===true).length;
    
    setItemCounts({
      total: allProducts.length,
      moisturizer: moisturizerCount,
      toner: tonerCount,
      cleanser: cleanserCount,
      vegan: veganCount,
      non_toxic: nonToxicCount,
      is_cruelty_free: crueltyFreeCount
    })
  }, [allProducts])

  useEffect(() => {
    let filteredProducts = [...allProducts];
  
    if (filters.type) {
      filteredProducts = filteredProducts.filter((product) => {
        return filters.type.toLowerCase() === product.type.toLowerCase();
      });  
    }

    if (filters.vegan) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.vegan === true;
      });  
    }

    if (filters.non_toxic) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.non_toxic === true;
      });  
    }

    if (filters.is_cruelty_free) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.is_cruelty_free === true;
      });  
    }
    
    setProducts(filteredProducts);
  }, [filters, allProducts, setProducts]);

  const handleCheckboxChange = (event) => {
    setFilters({...filters, [event.target.id]: event.target.checked});
  }

  const handleRadioSelection = (event) => {
    setFilters({...filters, [event.target.name]: event.target.value});
  }

  return (
    <aside className="Filters">
      <h4>Filter By:</h4>
      <div className="types">
        <span>Product Type:</span>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="" 
            id="any"
            onClick={handleRadioSelection}/>
          <label htmlFor="any" className="form-check-label">Any Type ({itemCounts.total})</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="moisturizer" 
            id="moisturizers"
            onClick={handleRadioSelection}/>
          <label htmlFor="moisturizers" className="form-check-label">Moisturizers ({itemCounts.moisturizer})</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="toner" 
            id="toners"
            onClick={handleRadioSelection}/>
          <label htmlFor="toners" className="form-check-label">Toners ({itemCounts.toner})</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="cleanser" 
            id="cleansers"
            onClick={handleRadioSelection}/>
          <label htmlFor="cleansers" className="form-check-label">Cleansers ({itemCounts.cleanser})</label>
        </div>
      </div>

      <div className="product-labels">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox"  
            id="vegan"
            onChange={handleCheckboxChange}/>
          <label htmlFor="vegan" className="form-check-label">Vegan ({itemCounts.vegan})</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="non_toxic"
            onChange={handleCheckboxChange}/>
          <label htmlFor="non_toxic" className="form-check-label">Non-toxic ({itemCounts.non_toxic})</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="is_cruelty_free"
            onChange={handleCheckboxChange}/>
          <label htmlFor="is_cruelty_free" className="form-check-label">Cruelty-free ({itemCounts.is_cruelty_free})</label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;

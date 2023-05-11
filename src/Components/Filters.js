import { useEffect, useState } from "react";
const Filters = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {});
  return (
    <aside>
      <label>
        <input type="radio" name="type" value="Moisturizers" />
        Moisturizers
      </label>
      <label>
        <input type="radio" name="type" value="Toners" />
        Toners
      </label>
      <label>
        <input type="radio" name="type" value="Cleansers" />
        Cleansers
      </label>
      <label>
        <input type="checkbox" name="claim" value="Vegan" />
        Vegan
      </label>
      <label>
        <input type="checkbox" name="claim" value="Non-toxic" />
        Non-toxic
      </label>
      <label>
        <input type="checkbox" name="claim" value="cruelty-free" />
        Cruelty-free
      </label>
    </aside>
  );
};

export default Filters;

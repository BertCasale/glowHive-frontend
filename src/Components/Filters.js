const Filters = () => {
  return (
    <aside>
      <label>
        <input type="checkbox" name="product" value="Moisturizers" />
        Moisturizers
      </label>
      <label>
        <input type="checkbox" name="product" value="Toners" />
        Toners
      </label>
      <label>
        <input type="checkbox" name="product" value="Cleansers" />
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

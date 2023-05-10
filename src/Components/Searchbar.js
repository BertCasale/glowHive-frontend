function SearchBar({ products, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    onSearch(searchTerm.trim());
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by name, brand, or type"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

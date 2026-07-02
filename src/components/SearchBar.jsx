function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg p-3 w-full"
    />
  );
}

export default SearchBar;
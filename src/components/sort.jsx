function Sort({ sortOrder, setSortOrder }) {
  return (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border rounded-lg p-3"
    >
      <option value="default">Sort</option>

      <option value="low">
        Price: Low to High
      </option>

      <option value="high">
        Price: High to Low
      </option>
    </select>
  );
}

export default Sort;
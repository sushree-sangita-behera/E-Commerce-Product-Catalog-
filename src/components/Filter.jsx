function Filter({ setCategory }) {
  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-lg p-3"
    >
      <option value="All">All Categories</option>

      <option value="Electronics">
        Electronics
      </option>

      <option value="Fashion">
        Fashion
      </option>

      <option value="Accessories">
        Accessories
      </option>
    </select>
  );
}

export default Filter;
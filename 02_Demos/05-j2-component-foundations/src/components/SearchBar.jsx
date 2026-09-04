/** Search input — controlled từ cha. */
export function SearchBar({ query, onQueryChange }) {
  return (
    <div className="field">
      <label htmlFor="project-search">Tìm dự án</label>
      <input
        id="project-search"
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Nhập tên…"
        autoComplete="off"
      />
    </div>
  );
}

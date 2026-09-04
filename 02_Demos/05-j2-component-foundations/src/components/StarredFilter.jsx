/** Toggle starred — controlled từ cha. */
export function StarredFilter({ starredOnly, onStarredOnlyChange }) {
  return (
    <label className="check">
      <input
        type="checkbox"
        checked={starredOnly}
        onChange={(e) => onStarredOnlyChange(e.target.checked)}
      />
      Chỉ dự án starred
    </label>
  );
}

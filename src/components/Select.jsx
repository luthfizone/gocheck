import PropsTypes from "prop-types";

function Select({ sortBy, onSortBy, onClearData }) {
  return (
    <div className="actions">
      <select value={sortBy} onChange={onSortBy}>
        <option value="input">Sort by input</option>
        <option value="title">Sort by title</option>
        <option value="status">Sort by status</option>
      </select>
      <button className="btn-clear" onClick={() => onClearData()}>
        Clear
      </button>
    </div>
  );
}

Select.propTypes = {
  sortBy: PropsTypes.string,
  onSortBy: PropsTypes.func,
  onClearData: PropsTypes.func,
};

export default Select;

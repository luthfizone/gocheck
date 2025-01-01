// List.jsx

import PropsTypes from "prop-types";

/**
 * List component for rendering individual note items.
 * @param {Object} props - Component props.
 * @param {Array} props.items - List of note items.
 * @param {Function} props.onDeleteItem - Callback to delete an item.
 * @param {Function} props.onHandleToggleDone - Callback to toggle item status.
 */
function List({ items, onDeleteItem, onHandleToggleDone }) {
  return (
    <>
      {items.map(({ id, inputValue, done }) => (
        <li key={id}>
          <input
            type="checkbox"
            value={done}
            onChange={() => onHandleToggleDone(id)}
            name="item"
            id={`item-${id}`}
          />
          <span style={{ textDecoration: done ? "line-through" : "" }}>
            {inputValue}
          </span>
          <button className="btn-remove" onClick={() => onDeleteItem(id)}>
            Remove
          </button>
        </li>
      ))}
    </>
  );
}

List.propTypes = {
  items: PropsTypes.array.isRequired,
  onDeleteItem: PropsTypes.func.isRequired,
  onHandleToggleDone: PropsTypes.func.isRequired,
};

export default List;

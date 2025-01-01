import PropsTypes from "prop-types";

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

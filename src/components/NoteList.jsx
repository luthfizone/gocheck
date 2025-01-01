// NoteList.jsx

import PropsTypes from "prop-types";
import List from "./List";

/**
 * NoteList component for displaying and sorting notes.
 * @param {Object} props - Component props.
 * @param {Array} props.items - List of note items.
 * @param {Function} props.onDeleteItem - Callback to delete an item.
 * @param {Function} props.onHandleToggleDone - Callback to toggle item status.
 * @param {string} props.sortBy - Sorting criteria.
 */
function NoteList({ items, onDeleteItem, onHandleToggleDone, sortBy }) {
  // Sort items based on the selected criteria
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "input") {
      return a.id - b.id;
    } else if (sortBy === "title") {
      return a.inputValue.localeCompare(b.inputValue);
    } else if (sortBy === "status") {
      return a.done - b.done;
    }
  });

  return (
    <div className="list">
      <ul>
        <List
          items={sortedItems}
          onDeleteItem={onDeleteItem}
          onHandleToggleDone={onHandleToggleDone}
        />
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  items: PropsTypes.array.isRequired,
  onDeleteItem: PropsTypes.func.isRequired,
  onHandleToggleDone: PropsTypes.func.isRequired,
  sortBy: PropsTypes.string.isRequired,
};

export default NoteList;

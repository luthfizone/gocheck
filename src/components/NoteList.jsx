import PropsTypes from "prop-types";
import List from "./List";

function NoteList({ items, onDeleteItem, onHandleToggleDone, sortBy }) {
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

import { useState } from "react";
import PropsTypes from "prop-types";
// import item from "./data/sample.json";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItems(item) {
    const newList = [...notes];
    newList.push(item);
    setNotes(newList);
  }

  function handleDeleteItems(id) {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
  }

  function handleToggleDone(id) {
    const updatedNotes = notes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setNotes(updatedNotes);
  }

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="app-container">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <NoteList
        items={notes}
        onDeleteItem={handleDeleteItems}
        onHandleToggleDone={handleToggleDone}
        sortBy={sortBy}
      />
      <Select sortBy={sortBy} onSortBy={handleSortBy} />
      <Stats items={notes} />
    </div>
  );
}

function Select({ sortBy, onSortBy }) {
  return (
    <div className="actions">
      <select value={sortBy} onChange={onSortBy}>
        <option value="input">Sort by input</option>
        <option value="title">Sort by title</option>
        <option value="status">Sort by status</option>
      </select>
    </div>
  );
}

function Logo() {
  return <span className="logo">GoCheck</span>;
}

function Form({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    } else if (inputValue.trim()) {
      const newItem = {
        id: new Date().getTime(),
        inputValue,
        done: false,
      };

      onAddItem(newItem);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Is there anything to note?</h3>
      <input
        type="text"
        name="note"
        id="note"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add notes..."
      />
      <button>Add</button>
    </form>
  );
}

Form.propTypes = {
  onAddItem: PropsTypes.func,
};

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

function Stats({ items }) {
  // derived state of notes from parent component
  // get total checked

  const totalItems = items.length;
  const doneItems = items.filter((item) => item.done).length;
  const percentage = Math.round((doneItems / totalItems) * 100);

  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>You don&apos;t have a Notes ✅</span>
      </footer>
    );
  } else {
    return (
      <footer className="stats">
        <span>
          {percentage === 100
            ? "You have already checked All 🗒️"
            : `You have a new notes ${totalItems} which already on the checklist (
          ${percentage}%)✅`}
        </span>
      </footer>
    );
  }
}

Stats.propTypes = {
  items: PropsTypes.array.isRequired,
};

export default App;

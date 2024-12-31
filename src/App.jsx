import { useState } from "react";
import ProptTypes from "prop-types";
// import item from "./data/sample.json";

function App() {
  const [notes, setNotes] = useState([]);

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

  return (
    <div className="app-container">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <NoteList
        items={notes}
        onDeleteItem={handleDeleteItems}
        onHandleToggleDone={handleToggleDone}
      />
      <Stats />
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
  onAddItem: ProptTypes.func,
};

function NoteList({ items, onDeleteItem, onHandleToggleDone }) {
  return (
    <div className="list">
      <ul>
        <List
          items={items}
          onDeleteItem={onDeleteItem}
          onHandleToggleDone={onHandleToggleDone}
        />
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  items: ProptTypes.array.isRequired,
  onDeleteItem: ProptTypes.func.isRequired,
  onHandleToggleDone: ProptTypes.func.isRequired,
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
  items: ProptTypes.array.isRequired,
  onDeleteItem: ProptTypes.func.isRequired,
  onHandleToggleDone: ProptTypes.func.isRequired,
};

function Stats() {
  return (
    <footer className="stats">
      <span>You have a new notes x which already on the checklist</span>
    </footer>
  );
}

export default App;

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

  return (
    <div className="app-container">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <NoteList items={notes} />
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
        id: new Date(),
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

function NoteList({ items }) {
  return (
    <div className="list">
      <ul>
        <List items={items} />
      </ul>
    </div>
  );
}

function List({ items }) {
  return (
    <>
      {items.map(({ id, inputValue }) => (
        <li key={id}>
          <input type="checkbox" name="item" id={`item-${id}`} />
          {inputValue}
          <button className="btn-remove">Remove</button>
        </li>
      ))}
    </>
  );
}

List.propTypes = {
  items: ProptTypes.array.isRequired,
};

function Stats() {
  return (
    <footer className="stats">
      <span>You have a new notes x which already on the checklist</span>
    </footer>
  );
}

export default App;

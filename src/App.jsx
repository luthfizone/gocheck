import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Select from "./components/Select";
import Stats from "./components/Stats";

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

  function handleClearData() {
    const notesEmpty =
      notes.length !== 0 &&
      `${window.confirm("Are you want to delete the nodes?")} `;

    if (notesEmpty) {
      setNotes([]);
    }
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
      <Select
        sortBy={sortBy}
        onSortBy={handleSortBy}
        onClearData={handleClearData}
      />
      <Stats items={notes} />
    </div>
  );
}

export default App;

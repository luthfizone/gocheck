import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Select from "./components/Select";
import Stats from "./components/Stats";

/**
 * Main application component.
 * Manages the state and behavior of the note-taking application.
 */
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  /**
   * Adds a new item to the notes list.
   * @param {Object} item - The note item to add.
   */
  function handleAddItems(item) {
    const newList = [...notes];
    newList.push(item);
    setNotes(newList);
  }

  /**
   * Deletes an item from the notes list by ID.
   * @param {number} id - The ID of the note to delete.
   */
  function handleDeleteItems(id) {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
  }

  /**
   * Toggles the 'done' status of a note by ID.
   * @param {number} id - The ID of the note to toggle.
   */
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

  /**
   * Sets the sorting criteria for the notes.
   * @param {Event} e - The event triggered by changing the sort option.
   */
  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  /**
   * Clears all notes after user confirmation.
   */
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

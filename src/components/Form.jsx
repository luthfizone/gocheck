import { useState } from "react";
import PropsTypes from "prop-types";

/**
 * Form component for adding new notes.
 * @param {Object} props - Component props.
 * @param {Function} props.onAddItem - Callback to add a new item.
 */
function Form({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  /**
   * Handles the form submission.
   * @param {Event} e - The form submit event.
   */
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

export default Form;

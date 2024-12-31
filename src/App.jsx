function App() {
  return (
    <div className="app-container">
      <Logo />
      <Form />
      <NoteList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span>GoCheck</span>;
}

function Form() {
  return (
    <form>
      <h3>Is there anything to note?</h3>
      <input type="text" name="note" id="note" />
      <button>Add</button>
    </form>
  );
}

function NoteList() {
  return (
    <ul>
      <li>
        Eats <button>Remove</button>
      </li>
      <li>
        Drinks <button>Remove</button>
      </li>
    </ul>
  );
}

function Stats() {
  return (
    <footer>
      <span>You have a new notes x which already on the checklist</span>
    </footer>
  );
}

export default App;

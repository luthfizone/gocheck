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
  return <span className="logo">GoCheck</span>;
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
    <div className="list">
      <ul>
        <List />
      </ul>
    </div>
  );
}

function List() {
  return (
    <>
      <li>
        Eats <button className="btn-remove">Remove</button>
      </li>
      <li>
        Drinks <button className="btn-remove">Remove</button>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>You have a new notes x which already on the checklist</span>
    </footer>
  );
}

export default App;

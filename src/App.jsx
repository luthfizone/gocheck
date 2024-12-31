import item from "./data/sample.json";
import ProptTypes from "prop-types";

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
        <List items={item} />
      </ul>
    </div>
  );
}

function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <input type="checkbox" name="item" id={`item-${item.id}`} />
          {item.name}
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

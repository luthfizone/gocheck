// Stats.jsx

import PropsTypes from "prop-types";

/**
 * Stats component for displaying statistics about the notes.
 * @param {Object} props - Component props.
 * @param {Array} props.items - List of note items.
 */
function Stats({ items }) {
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

export default Stats;

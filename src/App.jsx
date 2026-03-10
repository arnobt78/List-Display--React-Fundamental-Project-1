/* React hook for component state; re-renders when state changes */
import { useState } from "react";
/* Static list of people (array of { id, name, age, image }); no API call */
import data from "./data";
import List from "./List";

/**
 * Root component: holds the list in state and renders layout.
 * - people: current list (from data.js initially)
 * - setPeople: updates list; e.g. setPeople([]) clears it
 */
function App() {
  /* useState(data): initial state is the imported array; returns [value, setter] */
  const [people, setPeople] = useState(data);

  const isListEmpty = people.length === 0;

  const handleButtonClick = () => {
    if (isListEmpty) {
      setPeople(data);
      return;
    }

    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <div className="tutorial-note">
          <h5>React State Learning Card</h5>
          <p>
            This mini app teaches a core idea: update state, and the UI updates
            automatically.
          </p>
          <p>
            Try it now. Click clear to empty the list, then click return to
            restore the original birthday data.
          </p>
        </div>
        {/* Dynamic count: updates when people.length changes */}
        <h3>{people.length} birthdays today</h3>
        {/* Pass current list down so List can map over it */}
        <List people={people} />
        {/* When list is empty, the same button restores the original data */}
        <button
          type="button"
          className="btn btn-block"
          onClick={handleButtonClick}
        >
          {isListEmpty ? "return to birthday list" : "clear all"}
        </button>
      </section>
    </main>
  );
}

export default App;

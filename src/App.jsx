/* React hook for component state; re-renders when state changes */
import { useState } from 'react';
/* Static list of people (array of { id, name, age, image }); no API call */
import data from './data';
import List from './List';

/**
 * Root component: holds the list in state and renders layout.
 * - people: current list (from data.js initially)
 * - setPeople: updates list; e.g. setPeople([]) clears it
 */
function App() {
  /* useState(data): initial state is the imported array; returns [value, setter] */
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        {/* Dynamic count: updates when people.length changes */}
        <h3>{people.length} birthdays today</h3>
        {/* Pass current list down so List can map over it */}
        <List people={people} />
        {/* Clear all: set state to [] so list re-renders empty */}
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;

# List View Display - React, Vite, JavaScript, Custom CSS Fundamental Project 1

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.1-646CFF)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A beginner-friendly React app that displays a list of people and their birthdays. You can view everyone on the list and clear the list with one click. It’s built to teach and practice core React ideas: components, props, state, and styling—with no backend or API. Use it as a reference for learning React or as a starting point for your own list-based UIs.

**Live Demo:** [https://listview-display.vercel.app/](https://listview-display.vercel.app/)

![Screenshot 2026-03-10 at 16 21 20](https://github.com/user-attachments/assets/cc2d1975-b092-4154-8f36-e5e3f8a7d6e0)

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables (.env)](#environment-variables-env)
7. [How the Project Works](#how-the-project-works)
8. [Component Walkthrough](#component-walkthrough)
9. [Data & Styling](#data--styling)
10. [Reusing Components in Other Projects](#reusing-components-in-other-projects)
11. [Scripts & Commands](#scripts--commands)
12. [API, Backend & Routes](#api-backend--routes)
13. [Keywords & Concepts](#keywords--concepts)
14. [Conclusion](#conclusion)
15. [License](#license)

---

## Project Summary

**Birthday Buddy** is a single-page React application that shows a list of people with their images, names, and ages (birthday count). The app uses static data from a local JavaScript file—no server, database, or external API. It demonstrates:

- **Components:** Breaking the UI into `App`, `List`, and `Person`.
- **State:** Using `useState` to hold the list and clear it.
- **Props:** Passing data from parent to child (`people` → `List` → `Person`).
- **List rendering:** Using `array.map()` and a stable `key` for each item.

The project is ideal for learning React fundamentals and for teaching others. You can extend it with filtering, adding items, or connecting to an API later.

---

## Features

- **Display list:** Renders a list of people with avatar, name, and age.
- **Dynamic count:** Heading shows how many birthdays (e.g. “5 birthdays today”).
- **Clear all:** One button clears the entire list by setting state to an empty array.
- **Component-based UI:** Separate `App`, `List`, and `Person` components for clarity and reuse.
- **Styled with CSS:** Global styles in `index.css` with CSS variables, layout, and responsive-friendly design.
- **Educational:** Focused on React basics—no routing, no backend, minimal dependencies.

---

## Technologies Used

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **React 18**          | UI components, state, and rendering        |
| **Vite 4**            | Dev server, build, and HMR                 |
| **JavaScript (ES6+)** | Logic, modules, and JSX                    |
| **CSS3**              | Layout, theming via variables, and visuals |

There is no TypeScript, no backend, and no database in this project.

---

## Project Structure

```bash
01-birthday-buddy/
├── public/                 # Static assets (e.g. favicon)
│   └── vite.svg            # Favicon used in index.html
├── src/
│   ├── App.jsx             # Root component: state + layout
│   ├── List.jsx            # Renders list of Person items
│   ├── Person.jsx          # Single person card (image, name, age)
│   ├── data.js             # Static array of people (no API)
│   ├── index.css           # Global styles and CSS variables
│   ├── main.jsx            # Entry: mounts App into #root
│   └── assets/             # Optional images/assets
├── .env                    # Optional; not used by default (see below)
├── .eslintrc.cjs           # ESLint config for JS/JSX
├── .gitignore
├── index.html              # HTML shell and SEO meta tags
├── package.json
├── vite.config.js          # Vite + React plugin
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or newer recommended)
- **npm** (or yarn/pnpm)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd 01-birthday-buddy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Run the project

- **Development:**  
  `npm run dev`  
  Then open the URL shown in the terminal (e.g. [http://localhost:5173](http://localhost:5173)).

- **Production build:**  
  `npm run build`  
  Output is in the `dist/` folder.

- **Preview production build:**  
  `npm run preview`  
  Serves the built app locally.

- **Lint:**  
  `npm run lint`  
  Runs ESLint on `src` (see [Scripts & Commands](#scripts--commands)).

---

## Environment Variables (.env)

This project **does not use environment variables by default**. All data comes from `src/data.js`.

If you later add an API or config (e.g. API base URL), you can use a `.env` file:

1. **Create `.env` in the project root** (same level as `package.json`).  
   It is already listed in `.gitignore`, so it won’t be committed.

2. **Define variables with the `VITE_` prefix** (required for Vite to expose them to the client):

   ```env
   VITE_API_BASE_URL=https://api.example.com
   VITE_APP_TITLE=Birthday Buddy
   ```

3. **Use them in your code:**

   ```js
   const apiBase = import.meta.env.VITE_API_BASE_URL;
   const title = import.meta.env.VITE_APP_TITLE;
   ```

4. **Optional:** Add a `.env.example` file (without secrets) and commit it, so others know which variables are needed:

   ```env
   VITE_API_BASE_URL=
   VITE_APP_TITLE=Birthday Buddy
   ```

For this starter project, **no `.env` file is required** to run or build.

---

## How the Project Works

1. **Entry:** `index.html` loads `src/main.jsx`, which renders `<App />` inside `<div id="root">`.
2. **State:** `App.jsx` imports the people array from `data.js` and stores it in state with `useState(data)`.
3. **Display:** The same state is used to:
   - Show the count in the heading: `{people.length} birthdays today`.
   - Pass `people` to `<List people={people} />`.
4. **List:** `List.jsx` maps over `people` and renders one `<Person />` per item, passing each person’s fields as props (and `key={person.id}`).
5. **Person:** `Person.jsx` receives `image`, `name`, and `age` and renders an avatar, name, and “X years”.
6. **Clear:** The “clear all” button calls `setPeople([])`, so the list becomes empty and the UI updates.

Data flow: **data.js → App (state) → List (props) → Person (props)**. No API or backend is involved.

---

## Component Walkthrough

### App.jsx

Root component. It holds the list in state and renders the layout.

- Imports `useState`, `data`, and `List`.
- `const [people, setPeople] = useState(data)` — initial list from `data.js`.
- Renders a container with:
  - Heading: `{people.length} birthdays today`
  - `<List people={people} />`
  - Button that runs `() => setPeople([])` to clear the list.

```jsx
import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
```

---

### List.jsx

Presentational component. It receives `people` and renders one `Person` per item.

- Uses `people.map()` with `key={person.id}`.
- Spreads each `person` into `<Person />` so `Person` receives `id`, `name`, `age`, `image`.

```jsx
import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
```

---

### Person.jsx

Displays a single person: image, name, and age.

- Props: `image`, `name`, `age` (from parent via spread).
- Uses semantic `<article>` and classes for styling (`person`, `img`).

```jsx
const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
```

---

### main.jsx

Entry point. Mounts the app and applies global CSS.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## Data & Styling

### data.js

Exports a single array of person objects. No API calls.

Each item has: `id`, `name`, `age`, `image` (URL string).

```js
export default [
  { id: 1, name: "Bertie Yates", age: 29, image: "https://..." },
  { id: 2, name: "Hester Hogan", age: 32, image: "https://..." },
  // ...
];
```

You can replace or extend this array; the UI will reflect it as long as each object has `id`, `name`, `age`, and `image`.

---

### index.css

- **Global reset:** Box-sizing, margins, base font size.
- **CSS variables:** Colors (primary, grey, semantic), spacing, shadows, transitions.
- **Layout:** `.container` (max-width, padding, shadow), `.person` (grid for avatar + text).
- **Components:** `.btn`, `.btn-block`, typography, `.img` (round avatar style).

The app uses these classes in `App`, `List`, and `Person`; no CSS-in-JS or extra UI library.

---

## Reusing Components in Other Projects

- **Person:** Copy `Person.jsx` (and the `.person` / `.img` styles from `index.css`). Use it anywhere you need to show a single person/card with image, title, and subtitle. Props: `image`, `name`, `age` (or adapt prop names).
- **List:** Copy `List.jsx` and `Person.jsx`. Replace the inner component if you need a different card (e.g. product, event). Keep the `map` + `key` pattern.
- **App pattern:** The “state in parent + pass down as props” pattern in `App.jsx` is reusable for any list CRUD: state holds the array, children receive it and a setter (or callbacks) as needed.

Ensure your data shape matches what `Person` expects (`id`, `name`, `age`, `image`), or adjust the component and props accordingly.

---

## Scripts & Commands

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start Vite dev server (e.g. <http://localhost:5173>) |
| `npm run build`   | Build for production into `dist/`                    |
| `npm run preview` | Serve the production build locally                   |
| `npm run lint`    | Run ESLint on `.js` and `.jsx` files                 |

---

## API, Backend & Routes

- **API:** None. Data is static in `src/data.js`.
- **Backend:** None. Pure client-side React + Vite.
- **Routes:** Single page only. No React Router or path-based routing.

To use an API later: fetch in `App.jsx` (e.g. in `useEffect`), put the result in state, and pass that state to `List` the same way. You can move the API base URL into `.env` as in [Environment Variables (.env)](#environment-variables-env).

---

## Keywords & Concepts

- React, components, JSX
- useState, state management
- Props, prop drilling
- List rendering, key prop, array.map
- Functional components
- Vite, ES modules
- CSS variables, semantic HTML
- No backend, no API, no routing

---

## Conclusion

Birthday Buddy is a small, focused React project for learning components, state, props, and list rendering. The structure is simple enough to follow and to extend (e.g. filters, add/remove items, or an API). Use it as a reference or as a template for other list-based UIs.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

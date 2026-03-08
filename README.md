# List View Display - React, Vite, CSS, JavaScript Fundamental Project 1

<img width="600" alt="Birthday Buddy Screenshot" src="https://github.com/user-attachments/assets/98614497-6519-4a6e-adea-d18e95c81052" />

---

## Project Summary

**Birthday Buddy** is a beginner-friendly React project that demonstrates the core fundamentals of React development. The application displays a list of people and their birthdays, allowing users to view the list and clear it with a single click. It’s designed primarily for learning, teaching, and practicing basic React concepts including components, props, state, and styling.

The project is simple yet powerful as a teaching aid and a starting point for more complex React applications.

- **Live-Demo:** [https://birthday-buddy-arnob.netlify.app/](https://birthday-buddy-arnob.netlify.app/)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
6. [Component Walkthrough](#component-walkthrough)
   - [App.jsx](#appjsx)
   - [List.jsx](#listjsx)
   - [Person.jsx](#personjsx)
   - [data.js](#datajs)
   - [Styling (index.css)](#styling-indexcss)
   - [main.jsx](#mainjsx)
7. [Functionality & Logic](#functionality--logic)
8. [Code Examples](#code-examples)
9. [Keywords & Concepts](#keywords--concepts)
10. [Conclusion](#conclusion)

---

## Features

- **Display List:** Show a list of people with their images, names, and ages.
- **Clear List:** Remove all people from the list with a button click.
- **Component-based:** Uses separate components for modular, reusable code.
- **Styled UI:** Clean and visually appealing design with custom CSS.
- **Educational:** Demonstrates React fundamentals for beginners.

---

## Project Structure

```
Birthday-Buddy--React-Fundamental-Project-1/
│
├── public/               # Static assets (favicon, etc.)
├── src/
│   ├── App.jsx           # Main app component
│   ├── List.jsx          # List component to display people
│   ├── Person.jsx        # Person component to display individual
│   ├── data.js           # Data source for people
│   ├── index.css         # Global CSS styles
│   ├── main.jsx          # Entry point for React app
│   └── assets/           # Images and other static assets
│
├── .gitignore
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── vite.config.js        # Vite configuration
├── README.md             # Project documentation
└── Birthday buddy.fig    # Figma design file (if present)
```

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast development server and build tool for modern web projects.
- **CSS**: For styling the app.
- **JavaScript (ES6+)**: Language for logic and structure.
- **Figma**: (Optional) for design references.

---

## Getting Started

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/arnobt78/Birthday-Buddy--React-Fundamental-Project-1.git
   cd Birthday-Buddy--React-Fundamental-Project-1
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

---

### Running the Project

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or as shown in your terminal) to view the app in your browser.

---

## Component Walkthrough

### App.jsx

The main component. Handles:

- Importing the birthday data.
- Using React’s `useState` to set and manage the list.
- Rendering the count of birthdays.
- Displaying the `List` component with the people data.
- Providing a button to clear the list (by setting state to an empty array).

**Example:**

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
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
```

---

### List.jsx

Receives the array of people as props. Maps over this array to render a `Person` component for each entry.

**Example:**

```jsx
import Person from "./Person";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
};

export default List;
```

---

### Person.jsx

Displays a single person’s information (image, name, age). Receives props from `List.jsx`.

**Example:**

```jsx
const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
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

### data.js

Contains an array of people objects. Each object has:

- `id`: Unique identifier
- `name`: Person’s name
- `age`: Age
- `image`: URL to their picture

**Example:**

```js
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 29,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  // ...more people
];

export default data;
```

---

### Styling (index.css)

Defines the look and feel of the app using CSS. Includes:

- Variables for colors, fonts, etc.
- Styling for containers, headings, buttons, people list, images, and responsive design.

**Example:**

```css
:root {
  --primary: #f28ab2;
  --secondary: #fff;
  --text: #222;
  --border-radius: 0.5rem;
}
body {
  background: var(--primary);
  color: var(--text);
  font-family: "Segoe UI", sans-serif;
}
.container {
  background: var(--secondary);
  border-radius: var(--border-radius);
  padding: 2rem;
  max-width: 400px;
  margin: 4rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
button {
  background: #f28ab2;
  color: #fff;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin-top: 1rem;
}
.person {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}
.person img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
}
```

---

### main.jsx

Entry point: Renders the `<App />` component inside the root div of `index.html`.

**Example:**

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

## Functionality & Logic

1. **Data Import & State Setup:**  
   `data.js` exports an array of people. `App.jsx` imports this and uses `useState` to store the list.
2. **Display:**  
   The number of people (`people.length`) is shown in the heading. The `List` component receives the people array and renders each person.
3. **Person Component:**  
   Each person is displayed with their picture, name, and age.
4. **Clear All:**  
   The "Clear All" button sets the people array to empty, removing everyone from the list instantly.

---

## Code Examples

**Full App.jsx:**

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
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
```

**Sample data.js:**

```js
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 29,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
    </main>
  );
}

export default App;
```

**Sample data.js:**

```js
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 29,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  // ...more entries
];

export default data;
```

---

## Keywords & Concepts

- **React**
- **Component**
- **State (`useState`)**
- **Props**
- **Array.map**
- **Functional Components**
- **CSS Variables**
- **Conditional Rendering**
- **Event Handling**
- **Vite**
- **Beginner Project**
- **List Rendering**
- **Data Import/Export**

---

## Conclusion

Birthday Buddy is a hands-on project to help you understand and practice React basics. It covers essential concepts like state management, component architecture, and styling. The code is clean and modular, making it ideal for learning and teaching. You can easily extend the project with more features (like adding birthdays, filtering, etc.) as you grow your skills.

**Happy Coding!**

---

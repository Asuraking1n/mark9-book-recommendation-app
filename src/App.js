import React, { Suspense, useState } from "react";
import "./App.css";
const BookItems = React.lazy(() => import("./BookItems"));

const books = [
  {
    id: "01",
    type: "novel",
    rating: "7.5/10",
    location: "/images/novel-1.jpg",
    name: " The Kitchen House",
  },
  {
    id: "02",
    type: "novel",
    rating: "6/10",
    location: "/images/novel-2.jpg",
    name: "The Poppy wife",
  },
  {
    id: "03",
    type: "novel",
    rating: "9.5/10",
    location: "/images/novel-3.jpg",
    name: "The English Novel",
  },
  
  {
    id: "04",
    type: "history",
    rating: "6/10",
    location: "/images/history-1.jpg",
    name: "Aspect of the novel",
  },
  {
    id: "05",
    type: "history",
    rating: "9.5/10",
    location: "/images/history-2.jpg",
    name: "The Timeless",
  },
  {
    id: "06",
    type: "history",
    rating: "8/10",
    location: "/images/history-3.jpg",
    name: "British History",
  },
 
  {
    id: "07",
    type: "fan",
    rating: "4.5/10",
    location: "/images/fan-1.jpg",
    name: "Elvish",
  },
  {
    id: "08",
    type: "fan",
    rating: "7/10",
    location: "/images/fan-2.jpg",
    name: "Shadow and bone",
  },
  {
    id: "09",
    type: "fan",
    rating: "8.5/10",
    location: "/images/fan-3.jpg",
    name: "Garden of the moon",
  },
  
];

function App() {
  const [book, setbook] = useState(books);
  const handleChange = (e) => {
    const filtered = books.filter((f) =>
      f.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setbook(filtered);
  };
  const handleClick = (type) => {
    if (type === "all") {
      return setbook(books);
    }
    const newbook = books.filter((f) => f.type === type);
    setbook(newbook);
  };

  return (
    <div className="App">
      <h1>Mybook 📚 App</h1>
      <nav className="nav">
        <button className="btn" onClick={() => handleClick("all")}>
          All books
        </button>
        <button className="btn" onClick={() => handleClick("novel")}>
          Romance
        </button>
        <button className="btn" onClick={() => handleClick("history")}>
          History
        </button>
        <button className="btn" onClick={() => handleClick("fan")}>
         Fantasy
        </button>
      </nav>
      <div className="input-section">
        <input
          className="input"
          onChange={handleChange}
          placeholder="Search by item name"
          type="search"
        />
      </div>
      <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
        <BookItems book={book} />
      </Suspense>
      <footer className="footer">
        <small>&copy; Mybook {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}

export default App;

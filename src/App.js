import React from "react";
import "./index.css";
import Films from "./Films";
import Search from "./Search";

function App() {
  return (
    <div className="container">
      <header className="container">
        <h1>Studio Ghibli Films</h1>
      </header>
      <Search />
      <Films />
    </div>
  );
}

export default App;

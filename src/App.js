import React from "react";
import "./App.scss";
import SearchMovies from "./components/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="movie-title">Movie Search APP</h1>
      <SearchMovies />
    </div>
  );
}

export default App;

import React, { Fragment, useState } from "react";
import "../style/searchmovies.scss";
import DisplayMovies from "./DisplayMovies";
const SearchMovies = () => {
  // state

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const SearchMoviesAPI = async (event) => {
    event.preventDefault();
    //console.log("Submitting");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=xxxxx&language=en=US&query=${query}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      //console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Fragment>
      <form className="movies-container" onSubmit={SearchMoviesAPI}>
        <label className="movie-label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Movie Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-movie" type="submit">
          Search
        </button>
      </form>
      <DisplayMovies movies={movies} />
    </Fragment>
  );
};

export default SearchMovies;

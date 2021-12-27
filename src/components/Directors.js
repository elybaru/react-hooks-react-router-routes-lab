import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h2>Directors Page</h2>
    {directors.map(director => {
      return <div>{director}
        <ul>Movies</ul>
        {director.movies.map(movie => {
          return <li>{movie}</li>
        })}
      </div>
    })}
  </div>;
}

export default Directors;

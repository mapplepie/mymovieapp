import React from 'react';
import ProtoTypes from "prop-types";

function Movie({id, year, title, summary,poster}){
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="mobie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>

    </div>

  )
}

Movie.protoTypes = {
  id: ProtoTypes.number.isRequired,
  year: ProtoTypes.number.isRequired,
  title: ProtoTypes.string.isRequired,
  summary: ProtoTypes.string.isRequired,
  poster: ProtoTypes.string.isRequired,
}

export default Movie;
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster }) {
  return (
    <div className="moives__moive">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie_-title" >{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.porpTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
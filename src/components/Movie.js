import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, coverImg, rating, runtime, genres, summary }) {
  return <div className='movies__item'>
    <Link to={`./movie/${id}`}>
      <img src={coverImg} alt={title} />
    </Link>
    <h2>
      <Link to={`./movie/${id}`}>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</Link>
    </h2>
    <div className='movies__info'>
      <span>{rating}</span>
      <span className='bar'></span>
      <span>{runtime} MIN</span>
    </div>
    <ul>
      {genres.map(g =>
        (<li key={g}>{g}</li>)
      )}
    </ul>
  </div>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
}

export default Movie;
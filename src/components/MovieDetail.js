import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function MovieDetail({ title, bgImg, coverImg, rating, runtime, genres, summary }) {
  return <div className='movie'>
    <div className='movie__home__Btn'>
      <Link to={`/`}>Home</Link>
    </div>
    <div className='bgImg'>
      <img src={bgImg} alt={title} />
    </div>
    <div className='movie__info'>
      <div className='coverTxt'>
        <h2>{title}</h2>
        <h4 className='item__title'>rating</h4>
        <p className='item__txt'>{rating} / 10</p>
        <h4 className='item__title'>runtime</h4>
        <p className='item__txt'>{`${Math.floor(runtime / 60)}hr ${runtime % 60}min`}</p>
        <h4 className='item__title'>summary</h4>
        <p className='item__txt'>{summary}</p>
      </div>
      <div className='coverImg'>
        <img src={coverImg} alt={title} />
      </div>
      {/* <ul>
      {genres.map(g => <li key={g}>{g}</li>)}
    </ul> */}
    </div>
  </div>
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
}

export default MovieDetail;
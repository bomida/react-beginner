import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className='container'> {
    loading ?
      <div className='loader'>
        <span>Loading...</span>
      </div> :
      <div className='movies'>
        {movies.map(movie =>
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
            summary={movie.description_full}
          />
        )}
      </div>
  } </div>
}

export default Home;
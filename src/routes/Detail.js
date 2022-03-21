import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail'

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    // console.log(json.data.movie.genres);
    // console.log(json)
    // 🚨 genres 부분에 쓰인 map함수에서 오류가 났는데 어떻게 해결을 해야할지 모르겠다.
  }, [id])

  useEffect(() => {
    getMovie()
  }, [getMovie]);

  return <div> {
    loading ?
      <div className='loader'>
        <span>Loading...</span>
      </div> :
      <MovieDetail
        title={movie.title_long}
        bgImg={movie.background_image_original}
        coverImg={movie.medium_cover_image}
        rating={movie.rating}
        runtime={movie.runtime}
        // genres={movie.genres}
        summary={movie.description_full}
      />
  }</div>
}

export default Detail;
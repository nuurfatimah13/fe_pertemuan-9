/**
 * import CSS Module Movie
 * simpan di variable styles
 */
import React from 'react';
import styles from './Movie.module.css';

// menerima props
function Movie(props) {
  // destructing props
  const { movie } = props;

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={movie.poster}
        alt={movie.title}
      />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <p className={styles.movie__date}>{movie.year}</p>
    </div>
  );
}

export default Movie;

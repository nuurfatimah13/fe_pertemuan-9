/**
 * import CSS Module Hero
 * simpan di object styles
 */
import React, { useEffect, useState } from 'react';
import styles from "./Hero.module.css";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    // melakukan side effect: fetch data movie (api) 
    const respone = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    const data = await respone.json();

    // set movie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(fetchMovie, []);

  // menampilkan state movie
  console.log(movie);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>
            Genre: {movie.Genre}
          </h3>
          <p className={styles.hero__description}>
            {movie.Plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;

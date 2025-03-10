import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const Home = () => {
    const [popularMovies, setPopulerMoive] = useState([]);
    useEffect(()=>{
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        )
          .then((res) => res.json())
          .then((data) => setPopulerMoive(data.results));
    })
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            key={movie.id}
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage__runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage__rating">
                  {movie ? movie.vote_average : ""}
                  <FaStar className="inline-block mx-3 mb-3" />
                </span>
              </div>
              <div className="posterImage__description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;

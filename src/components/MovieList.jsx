/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="px-2">
      <h2 className="text-2xl m-10">
        {(type ? type : "POPULER").toUpperCase()}
      </h2>
      <div className="flex flex-wrap justify-center">
        { 
        movieList && 
        movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;

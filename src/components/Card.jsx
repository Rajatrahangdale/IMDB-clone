/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({movie}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="cards w-[260px] h-[340px]">
            <img
              className="h-[340px] overflow-hidden"
              src={`https://image.tmdb.org/t/p/w500/${
                movie && movie.backdrop_path
              }`}
              alt=""
            />
            <div className="cards__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.overview.slice(0,118)+"..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;

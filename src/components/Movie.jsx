import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getdata();
    window.scrollTo(0, 0);
  }, []);

  const getdata = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie w-full relative flex flex-col items-center text-white">
      <div className="movie__intro w-[80%]">
        <img
          className="movie__backdrop w-full h-[500px] object-cover"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail items-center w-[75%] flex relative bottom-[245px]">
        <div className="movie__detailLeft mr-[30px]">
          <div className="movie__posterBox ">
            <img
              className="movie__poster w-[800PX] rounded-xl"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight text-white flex flex-col justify-between h-[450px]">
          <div className="movie__detailRightTop mt-10">
            <div className="movie__name text-[60px] font-bold">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline text-lg font-semibold">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating text-xl">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              {/* <i class="fas fa-star" /> */}
              <span className="movie__voteCount ml-4 text-xl">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime text-xl">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate font-semibold text-2xl">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="movie__genres mt-6">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span
                        className="movie__genre px-3 py-1 border border-white mx-4 rounded-full"
                        id={genre.id}
                      >
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom mt-8 ">
            <div className="synopsisText text-2xl font-semibold">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links w-full flex justify-around gap-10">
        <div className="movie__heading text-4xl font-bold text-center">
          Useful Links
        </div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a className="" href={currentMovieDetail.homepage} target="_blank">
            <p>
              <span className="movie__homeButton movie__Button px-8 py-3 bg-red-600 rounded-lg cursor-pointer">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button px-8 py-3 bg-yellow-400 rounded-lg cursor-pointer">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading text-4xl mt-10">Production companies</div>
      <div className="movie__production flex items-end">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage items-center">
                  <img
                    className="movie__productionComapany mx-auto w-48"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Movie;

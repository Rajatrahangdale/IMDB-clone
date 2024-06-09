import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <>
      <div className="bg-black text-white">
        <div className="md:hidden"></div>
        <div className="hidden md:flex justify-start gap-10 items-center text-2xl py-2">
          <Link to="/">
            <img
              className="w-20 ml-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            />
          </Link>
          <Link to="/movies/popular">
            <span className="uppercase">popular</span>
          </Link>
          <Link to="/movies/top_rated">
            <span className="uppercase">Top Rated</span>
          </Link>
          <Link to="/movies/upcoming">
            <span className="uppercase">Upcomig</span>
          </Link>
        </div>

        {/* Responcive nave */}
        <div className="relative">
          {nav ? (
            <IoClose
              onClick={() => setnav(!nav)}
              className="md:hidden text-4xl mx-2"
            />
          ) : (
            <IoMenu
              onClick={() => setnav(!nav)}
              className="md:hidden text-4xl mx-2"
            />
          )}
        </div>
        {nav ? (
          <div
            className={
              nav
                ? "md:hidden flex flex-col bg-zinc-800 py-4 fixed gap-5 px-10 left-0 w-[60%] h-full border-r border-r-gray-900 text-white font-semibold ease-out duration-1000 z-20"
                : "fixed left-0 ease-out duration-1000"
            }
          >
            <Link to="/">
              <img
                className="w-20 ml-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              />
            </Link>
            <Link to="/movies/popular">
              <span className="uppercase">popular</span>
            </Link>
            <Link to="/movies/top_rated">
              <span className="uppercase">Top Rated</span>
            </Link>
            <Link to="/movies/upcoming">
              <span className="uppercase">Upcomig</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;

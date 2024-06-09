import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MovieList from "../components/MovieList";
import Movie from "../components/Movie";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies/:type" element={<MovieList />} />
        <Route path="/movie/:id/" element={<Movie />} />
        <Route path="/*" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default Routing;

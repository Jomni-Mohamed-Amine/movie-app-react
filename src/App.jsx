import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import MovieCard from "./componets/MovieCard";
import MovieList from "./componets/MovieList";
import Addnewmovie from "./componets/Addnewmovie";
import Filter from "./componets/Filter";

function App() {
  const [Moviedata, SetmovieData] = useState([]);
  const [loading, Setloading] = useState(false);
  const [open, SetOpen] = useState(false);
  const [filtertitle, Setfiltertitle] = useState("");
  const [filterrating, Setfilterrating] = useState("");

  const filter = Moviedata.filter((movie) => {
    const filterTitle = movie.title
      .toLowerCase()
      .includes(filtertitle.toLocaleLowerCase());
    const filterRating = filterrating
      ? movie.rating <= Number(filterrating)
      : true;
    return filterTitle && filterRating;
  });

  const addMovie = (newmovie) => {
    const newId = Moviedata.length + 1;
    SetmovieData([...Moviedata, { id: newId, ...newmovie }]);
  };
  const fetchData = async () => {
    const url = "http://localhost:5000/movies";
    Setloading(true);
    try {
      const res = await axios.get(url);
      console.log(res);
      SetmovieData(res.data);
      console.log(res.data);
      Setloading(false);
    } catch (err) {
      console.error("Error fetching");
      Setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading && <h1>loading ...</h1>}
      <div className="flex flex-col gap-5 bg-blue-950">
        <Filter setfiltredtitle={Setfiltertitle} setRating={Setfilterrating} />
        <MovieList moviesList={filter} />
      </div>
      <div className="my-4">
        <button onClick={() => SetOpen(!open)}> add movie</button>
        {open && <Addnewmovie addMovie={addMovie} setopen={SetOpen} />}
      </div>
    </div>
  );
}

export default App;

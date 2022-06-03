import { useEffect, useState } from 'react';
import './index.css'
import Movies from './components/Movies';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Singlemovie from './components/Singlemovie';

const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch(APIURL).then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCHAPI + searchTerm).then((res) => res.json())
        .then((data) => {
          setMovies(data.results)
        })
      searchTerm("")
    }
  }

  const handleOnchange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <h1 className='heading'>Movies Lists</h1>
        <form onSubmit={handleOnsubmit}>
          <input type="text"
            placeholder="Search"
            className='search'
            value={searchTerm}
            onChange={handleOnchange}
          />
        </form>
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Moviescontainer movies={movies} />} />
          <Route exat ="true" path="/movie/:id" element={<Singlemovie/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const Moviescontainer = ({movies})=>{
  console.log(movies)
  return(
    <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) =>
          <Movies key={movie.id} {...movie} />
        )}
      </div>
  )
}

export default App;

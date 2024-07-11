import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com?apikey=9d0d7228";

function App() {

  const [movies,setMovies] = useState([]);
  const [mname,setMname] = useState('');

  const searchMovies = async (title)  => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('superman')
  },[])

  return (
    <>
    <div className='app'>
      <h1>movieLand</h1>
      
      <div className='search'>
        <input
          placeholder='Search movie name'
          value={mname}
          onChange={(e) => setMname(e.target.value)}
        />
        <i className="ri-search-line"
          onClick={() => {searchMovies(mname)}}
        ></i>
      </div> 

      {
        movies?.length > 0 ?
        (
          <div className='container'>
            {
              movies.map((movie,index) => (
                <MovieCard movie={movie} key={index}/>
              ))
            }
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

    </div>
    </>
  );
}

export default App;

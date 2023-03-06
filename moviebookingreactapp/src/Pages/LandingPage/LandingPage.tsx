import { BrowserRouter as Router,Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../Components/NavBar/NavBar';
import Tile from '../../Components/Movie/Tile';
import BottomBar from '../../Components/NavBar/BottomBar';

const getAll=()=>{
  return axios.get("https://localhost:7069/Movie/GetAllMovies")
  .then(res=>res.data)
}


const LandingPage = () => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
      getAll()
      .then((data)=>setMovies(data));
  }, [])
  console.log(movies);
  
  return (
    <div>
      <NavBar/>
      {
        movies.map(movie=><Tile movie={movie}/>)
      }
      <BottomBar/>
    </div>
  )
}

export default LandingPage

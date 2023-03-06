import { BrowserRouter as Router,Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../Components/NavBar/NavBar';
import Tile from '../../Components/Movie/Tile';
import BottomBar from '../../Components/NavBar/BottomBar';
import styled from 'styled-components';
import MovieModal from '../../Components/Movie/Modal/MovieModal';
import DeleteModal from '../../Components/Movie/Modal/DeleteModal';

const MoviesDiv=styled.div`
  display:flex;
  width: 100%;
  flex-wrap: wrap;
  gap:30px;
  flex-direction: row;
`

const getAll=()=>{
  return axios.get("https://localhost:7069/Movie/GetAllMovies")
  .then(res=>res.data)
}

const LandingPage = () => {
  // const[modal,setModal]=useState(true);
  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState();

  const [movie, setMovie] = useState({           
    name:"",
    duration:"",
    genre:"",
    censored:"",
    rating:0,
    year:0,
    description:"",
    url:"",
  }) 

  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
      getAll()
      .then((data)=>setMovies(data));
  }, [])
  console.log(movie);
  // const [showMovieModel, setShowMovieModel] = useState(false)
  
  return (
    <div>
      <NavBar/>
        <MoviesDiv>
          {
            movies.slice(0,10).map(movie=><Tile setMovie={setMovie} setShowDeleteModal={setShowDeleteModal} setShowUpdateModal={setShowUpdateModal}   movie={movie}/>)
          }
          {/* { 
          showMovieModel &&  <MovieModal  />
        } */}

{
        showDeleteModal && <DeleteModal  movie={movie}  setShowDeleteModal={setShowDeleteModal}/>}
        {
          showUpdateModal && <MovieModal movie={movie} setShowMovieModal={setShowUpdateModal}/>
        }
      <button id="trig-add-btn" onClick={() => {setMovie({           
                  name:"",
                  duration:"",
                  genre:"",
                  censored:"",
                  rating:0,
                  year:0,
                  description:"",
                  url:"",
                });setShowUpdateModal(true)}} hidden >click </button>


        </MoviesDiv>
      <BottomBar />   
      { /*setShowMovieModel={setShowMovieModel}*/ }
    </div>
  )
}

export default LandingPage

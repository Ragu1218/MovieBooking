import React, { useState } from 'react'
import styled from 'styled-components'

const MovieModalDiv=styled.div`
position: absolute;
 top: 40%;
 left: 50%;
 transform: translate(-50%, -50%);
 line-height: 1.4;
 background: #f1f1f1;
 padding: 14px 28px;
 border-radius: 3px;
 max-width: 600px;
 min-width: 300px;
`

const MovieModal = ({setShowMovieModal, movie}:any) => {
  const [movieForm, setMovieForm] = useState({           
    name:"",
    duration:"",
    genre:"",
    censored:"",
    rating:0,
    year:0,
    description:"",
    url:"",
  }) 

  const handleChange=(e:any)=>{
    setMovieForm({
      ...movie,[e.target.name]:e.target.value
    })
  }

  const toggleModal = () => {
    setShowMovieModal(false);
    // setModal(!modal);
  };
  return (
    <MovieModalDiv>
      <label>Name</label>
      <input type="text" value={movie.name} name="name" onChange={e=>{handleChange(e)}}></input>
      <label>Duration</label>
      <input type="text" value={movie.duration} name="duration"></input>
      <label>Genre</label>
      <input type="text" value={movie.genre} name="genre"></input>
      <label>Censored</label>
      <input type="text" value={movie.censored} name="censored"></input>
      <label>Rating</label>
      <input type="number" value={movie.rating} name="rating"></input>
      <label>Year</label>
      <input type="number" value={movie.year} name="year"></input>
      <label>Description</label>
      <input type="text" value={movie.description} name="description"></input>
      <label>URL</label>
      <input type="url" value={movie.url}name="url"></input>
      <button onClick={() => setShowMovieModal(false)}>
          cancel
        </button>
    </MovieModalDiv>
  )
}

export default MovieModal

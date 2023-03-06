import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ModalDiv=styled.div`
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

const DeleteModal = ({movie, setShowDeleteModal}: any) => {
  // const[modal,setModal]=useState(true);
  const deletemovie=(id:string)=>{
    setShowDeleteModal(false)
    // setModal(!modal);
    axios.delete("https://localhost:7069/Movie/DeleteMovie/"+id,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })}
    console.log(movie);
    
  const toggleModal = () => {
    setShowDeleteModal(false)
    // setModal(!modal);
  };
  
  return (
    <>
    <ModalDiv>
      Are u sure?
        <button onClick={()=>deletemovie(movie.id)}>
          yes 
        </button>
        <button onClick={toggleModal}>
          cancel
        </button>
    </ModalDiv>
    </>
    
  )
}

export default DeleteModal;

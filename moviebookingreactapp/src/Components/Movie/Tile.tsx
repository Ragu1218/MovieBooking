import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { update } from '../../assets'
import { deleteIcon } from '../../assets'
import DeleteModal from './Modal/DeleteModal'
import MovieModal from './Modal/MovieModal'

const DisplayDiv=styled.div`
  background-color: black;
  color:whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  /* justify-content:last baseline; */
`
const Title=styled.div`
  background-color: black;
  color:whitesmoke;
  display: flex;
  /* flex-direction: column; */
  /* justify-content:last baseline; */
`
const Update =styled.div<{img: string}>`
  background-image: url(${props => props.img});
  width: 20px;
  height: 20px;
  background-size: cover;
`
const Delete =styled.div<{img: string}>`
  background-image: url(${props => props.img});
  width: 20px;
  height: 20px;
  background-size: cover;
`
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

const TileDiv= styled.div<{img:string}>`
  order: 1px solid whitesmoke;
  display:flex;
  flex:3 0 21%;

  flex-direction: column;
  justify-content: end;
  height:300px;
  max-width: 250px;
  background-image: url(${props => props.img});
  background-size: cover;
`


const Tile = ({movie, setMovie, setShowUpdateModal, setShowDeleteModal}:any) => {
  

  const onUpdate=()=>{

  }
  // const deletemovie=(id:string)=>{
  //   axios.delete("https://localhost:7069/Movie/DeleteMovie/"+id,{
  //     headers:{
  //       Authorization:"Bearer "+localStorage.getItem("token")
  //     }
  //   })
  // }
  // const[modal,setModal]=useState(true);
  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  // useEffect(() => {
  
  // }, [showModal])
  

  return (
    <TileDiv img={movie.url}>
      <DisplayDiv>
      <Title>{
          movie.name
        }
        
        </Title>
        <div>
          <Update img={update} onClick={()=>{setMovie(movie);setShowUpdateModal(true)}}></Update>
          <Delete img={deleteIcon} onClick={() => {setMovie(movie);setShowDeleteModal(true)}}></Delete>
          </div>
      </DisplayDiv>
      

      
      {/* {modal&&(<ModalDiv>
          Are u sure?
            <button onClick={()=>deletemovie(movie.id)}>
              yes 
            </button>
            <button onClick={toggleModal}>
              cancel
            </button>
        </ModalDiv>)} */}        
    </TileDiv>

  )
}

export default Tile;
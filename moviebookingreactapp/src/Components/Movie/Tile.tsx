import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { update } from '../../assets'
import { deleteIcon } from '../../assets'

const Title=styled.div`
  background-color: black;
  color:whitesmoke;
  display: flex;


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

const TileDiv= styled.div`
  border: 1px solid whitesmoke;
  display:flex;
  flex-direction: column;
  justify-content: end;
  height:200px;
  width: 150px;
  background-image: url("https://pbs.twimg.com/media/E57ohIgVoAcn0aM?format=jpg&name=4096x4096");
  background-size: cover;
`


const Tile = ({movie}:any) => {
  const onUpdate=()=>{

  }
  const onDelete=(id:string)=>{
    axios.delete("https://localhost:7069/Movie/DeleteMovie/"+id,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
  }

  return (
    <TileDiv>
        <Title>{
          movie.name
        }
        <Update img={update} onClick={()=>null}></Update>
        <Delete img={deleteIcon} onClick={()=>onDelete(movie.id)}></Delete>

        </Title>
    </TileDiv>

  )
}

export default Tile;
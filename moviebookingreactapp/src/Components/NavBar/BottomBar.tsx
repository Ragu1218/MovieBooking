import React, { Dispatch, useState } from 'react'
import styled from 'styled-components'
import { add } from '../../assets'
// import AddModal from '../Movie/Modal/AddModal'
import MovieModal from '../Movie/Modal/MovieModal'

// interface BtmBarProp{
//   setShowMovieModel:Dispatch<React.SetStateAction<boolean>>
// }

const BottomDiv=styled.div`
display: flex;
    height: 8vh;
    background-color: black;
    color:whitesmoke;
    justify-content: end;
    align-items: center;
    position:absolute;
    bottom:0;
    width:100%;
`
const Add=styled.div<{img: string}>`
    background-image: url(${props => props.img});
    width: 40px;
    height: 40px;
    margin-right: 1%;
    background-size: cover;
`
// {setShowMovieModel}:BtmBarProp
const BottomBar = () => {

    const onAdd=()=>{

    }
  const [showAddModal, setShowAddModal] = useState(false)


  return (
    <BottomDiv>
        <Add img={add} onClick={() => document.getElementById("trig-add-btn")?.click()}>
        </Add>
        {/* {showAddModal && <MovieModal setShowMovieModal={setShowAddModal} />} */}
        
    </BottomDiv>
  )
}

export default BottomBar
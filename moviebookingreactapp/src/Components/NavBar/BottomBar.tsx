import React from 'react'
import styled from 'styled-components'
import { add } from '../../assets'


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
const BottomBar = () => {

    const onAdd=()=>{

    }

  return (
    <BottomDiv>
        <Add img={add} onClick={onAdd}>
            
        </Add>
    </BottomDiv>
  )
}

export default BottomBar
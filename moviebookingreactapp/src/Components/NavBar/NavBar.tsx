import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavDiv=styled.div`
display: flex;
    height: 8vh;
    background-color: black;
    color:whitesmoke;
    justify-content: space-between;
    align-items: center;
`
const Button=styled.button`
    background-color: #681f68;
    color:black;
    border-radius: 10px;
    padding:5px;
`
const NavBar = () => {
    const navigate=useNavigate();
  return (
    <NavDiv>
        <div>
        MovieBooking
        </div>
        <div>
        <Button onClick={()=>navigate("/Login")} >
    ADMIN
    </Button>
        </div>
    

    
    </NavDiv>
  )
}

export default NavBar
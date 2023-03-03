import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { url } from 'inspector';
import axios from 'axios';

export const Body=styled.div`
background-image: url("https://preview.redd.it/4fxxbm4opjd31.jpg?auto=webp&s=f5b7d62076600a978d290a5e87f13140c47f5cd0");
background-size:cover ;
  height:100vh;
`
export const Form=styled.div`
  background-color: rgb(50, 50, 51);
  border-radius: 300px;
  height: 60vh;
  padding: 20px;
  width: 35%;
  opacity: 0.95;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Content=styled.div`
 position: absolute;
  top: 42%;
  left: 40%;
  transform: translate(-50%, -50%); 
`
export const Icon=styled.div`
margin-left:30%;
margin-bottom: 10%;
margin-top: 40%;
`

export const Buton=styled.button`
  margin-left: 30%;
  margin-top:5%;
  color: whitesmoke;
  background-color: #721b8c;
  padding: 20px;
  border-radius: 10px;
  width:100%;
`
export const BackButton=styled.button`
  width:5%;
  height: 100vh;
  background-color:black;
  opacity:0.7;
`
const AdminLogin = () => {
  const [user, setUser] = useState({           
    userName:"",
    password:""
  }) 

const navigate = useNavigate();

useEffect(() => {
  isAdmin();
},[user])

const onLogin=()=>{
  axios.post("https://localhost:7069/Login",user)
  .then(res=>console.log(res.data))
}
  
  const [admin, setAdmin] = useState(false);
  const isAdmin=()=>{
    if(user.userName==="admin" && user.password==="admin1234") setAdmin(true);
  }

  const handleChange=(e: any)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
  }

  return (
    
      <Body>
      <Form>
        
        <Content>
          <Icon><img height={"180px"} src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" /></Icon>
          <Input  name="userName" title={"Username"} handleChange={handleChange}/><br></br>
          <Input  name="password" title={"Password"} handleChange={handleChange} /><br></br>
          <Buton  onClick={onLogin}>Click Back/Login</Buton>
          {/* disabled={!(admin)} */}
        </Content>
      </Form>
      <BackButton onClick={e=>{navigate(-1)}}></BackButton>
    </Body>
    
  )
}

export default AdminLogin;

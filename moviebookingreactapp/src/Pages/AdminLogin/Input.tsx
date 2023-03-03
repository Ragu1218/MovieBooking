import React from 'react'
import styled from 'styled-components'

const Inp=styled.input`
  color:black;
  width:150%;
  padding: 10px;
  background-color: #eaf3f3;
  border-radius: 10px;
  margin-top: 5%;
`
const Label=styled.label`
  color:white;
  width:150%;
  padding: 5px;
  border-radius: 10px;
`

interface InputProps{
    name:string
    title: string,
    handleChange:any,
}

const Input = (props:InputProps) => {
  return (
    <div>
      <Label >{props.title}
            <div className="input"><Inp  type="text" name={props.name}  onChange={e=>{props.handleChange(e)}}/></div>
        </Label>
    </div>
  )
}

export default Input

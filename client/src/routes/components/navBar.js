import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
    <header>
      <NavContainer>
      <Title>
        <img src='https://iconarchive.com/download/i89977/icons8/windows-8/Animals-Dog.ico' alt=''/>
      <NavLink to='/'>
        Henry Dogs
      </NavLink>
      </Title>
      <Routediv>
      <NavLink to='/'>INTRO</NavLink>
      <NavLink to='/home'>HOME</NavLink>
      <NavLink to='/createdog' className='principal'>CREATE DOG</NavLink>
      </Routediv>
      </NavContainer>
    </header>
  )
}

const Title = styled.h1`
height: 70px;
margin-top: 0;
padding: 5px;
a{text-decoration: none;
color: black;}

img{
  background: none;
  width: 30px;
  height: auto;
  margin-right: 10px;
}

`
const NavContainer = styled.nav`
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 1200px;
margin-left: auto;
margin-right: auto;
`
const Routediv = styled.div`
width: 35%;
justify-content: space-between;
text-align: end;
margin-top: auto;
 margin-bottom: auto;
a{
  margin-left: 5px;
  text-decoration: none;
  color: white;
  font-size: bold;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 500;
  
}

.principal {
  background-color: rgb(159, 43, 43);
  border: 1px solid black;
  }
`

export default NavBar
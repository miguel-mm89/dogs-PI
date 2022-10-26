import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

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
      <Links>
      <a href='https://www.linkedin.com/in/miguel-a-morales-347587210/'  target='_blank' rel="noreferrer">
        <BsLinkedin/>
      </a>
      <a href='https://github.com/miguel-mm89'  target='_blank' rel="noreferrer">
        <AiFillGithub/>
      </a>
      </Links>
      <Routediv>
      <NavLink to='/home'>HOME</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
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
width: 200px;
a
{text-decoration: none;
color: black;
}

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
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`
const Routediv = styled.div`
width: 350px;
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

const Links = styled.div`
padding: 7px;
font-size: 32px;
background: none;
margin-left: 13%;
a{
  color: black;
  text-decoration: none;
  margin: 5px;
}
`

export default NavBar
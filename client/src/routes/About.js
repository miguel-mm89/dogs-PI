import Felipe from './../pics/20211106_010610.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const About =()=>{
    return(
      <selection>
        <ContentDiv>
            <img src={Felipe} alt='Felipe PI'/>
            <h3>THIS WEB APPLICATION HAS BEEN CREATED BY MIGUEL MORALES </h3>
            <Link to='/home'>Back Home</Link>
        </ContentDiv>
      </selection>
    )
}

export const ContentDiv = styled.div`
width: 650px;
height: 700px;
margin: auto;
margin-top: 80px;
background-color: rgb(17, 17, 17,.5);
text-align: center;
color: whitesmoke;
border-radius: 10px;

img{
    width: 80%;
    margin-top: 35px;
}

h3{
   width: 70%;
   flex-wrap: wrap;
   display: flex;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 25px;
   padding: 15px;
   margin-bottom: 75px;
}

a{
    border-radius: 5px;
    background-color: rgb(159, 43, 43);
    border: 1px solid black;
    padding: 10px 25px;
    width: 25%;
    color: whitesmoke;
    text-decoration: none;
    position: relative;
}

`

export default About
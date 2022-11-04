import { Link } from "react-router-dom"
import styled from "styled-components"

const LandingPage = () =>{
   return(
    <Back>
   <BodyPage>
    <div className="wrap"><Link to='/home'>
  <button className="button">Please, Bark !!!</button>
    </Link>
</div>
    </BodyPage>
    </Back> 
)
}


const BodyPage = styled.div`
background-image: url(https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
  background-attachment: cover;
  background-repeat: no-repeat;
  height: 959px;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0px;
  margin-left: auto;
  margin-right: auto;


.wrap{
  height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
}

.button {
  min-width: 300px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

`

const Back = styled.header`
width: 100%;
height: 100%;
background-color: black;
position: absolute;
margin-left: auto;
margin-right: auto;
top: 0;
`

export default LandingPage
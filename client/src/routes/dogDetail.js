import { useEffect, React } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetail, clean } from "../redux/actions"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";
import NavBar from "./components/navBar";
import { Loader } from "./home";
import FilterBy from "./components/filterBy";

const DogDetail = () =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    
    
    useEffect(() => {
      dispatch(getDetail(id));
      return ()=> dispatch(clean())
    }, [dispatch, id]);
    
    const detail = useSelector(state => state.dogDetail)

    if (Object.entries(detail).length === 0) {
      return (
        
        <main>
          <NavBar />
          <FilterBy />
          <Loader>
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Loader>
        </main>
      
      );
    }


    return(
    <>
    <NavBar />        
    <Details>
        <ContainerDiv>
            <h2>{detail.name}</h2>            
            <img src={detail.image} alt={detail.name}/>
            {detail.temperaments?<p> <b>Temperaments: </b>{detail.temperaments}.</p>: null}
            <p><b>Height: </b>{detail.height} metric</p>
            <p><b>Weight: </b>{detail.weight} KG.</p>
            <p><b>Life Span: </b>{detail.life_span}</p>
           <Link to="/home">
            <button>BACK HOME</button></Link>
        </ContainerDiv>
    </Details>
    </>
    )
}

const Details = styled.div`
height: 100vh;
padding-top: 50px;
`

const ContainerDiv = styled.section`
height: auto;
width: 700px;
display: flex;
flex-direction: column;
text-align: center;
background-color: rgb(0,0,0,.3);
border-radius: 10px;
border: 1px solid black;
box-shadow: 4px 3px 0 0 rgb(27, 29, 29,.7);
color: whitesmoke;

img{
  width: 600px;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

button{
  text-align: center;
  padding: 10px 25px;
  width: 25%;
  background-color: rgb(159, 43, 43);
  color: whitesmoke;
  border-radius: 10px;
  margin-bottom: 25px;
  cursor: pointer;
}

p{
  margin-top: 3px;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

`

export default DogDetail
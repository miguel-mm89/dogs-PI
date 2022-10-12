import { getDogs, getTemperaments } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterBy from "./components/filterBy";
import HomeCards from "./components/homeCards";
import NavBar from "./components/navBar";
import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const filtered = useSelector((state) => state.filtered);

  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
      dispatch(getTemperaments());
    }
  }, [dogs.length, dispatch]);

  if (filtered === "LOADING...") {
    return (
      <>
      <section>
        <NavBar />
        <FilterBy />
        <Loader>
          <div className="lds-roller">
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
      </section>
      </>
    );
  }
  return (
    <section>
      <NavBar />
      <FilterBy />
      {filtered === 'NO FOUND' ? <h2>NO FOUND</h2> :
      filtered === 'NO_BREEDS'? <h2>BREEDS DOGS <br/>
      HAS NOT BEEN CREATED</h2> 
      : <HomeCards /> }
    </section>
  );
};

export const Loader = styled.div`
height: 80vh;
display: flex;
justify-content: center;
align-items: center;


.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;
export default Home;

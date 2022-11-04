import { useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

const HomeCards = () => {
  const filtered = useSelector(state => state.filtered);

  const currentPage = useSelector(state => state.currentPage)

  const [cardPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

   let currentCards = filtered.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentPage)
  
  return (
    <main>
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={filtered.length}
        currentPage={currentPage}
      />
      <CardsContainer>
        {currentCards?.map((item) => (
          <CardDiv key={item.id}>
            <Name>{item.name}</Name>
            <ImgDiv>
              <img src={item.image} alt={item.name} />
            </ImgDiv>
            {item.temperaments ? (
              <p>
                <b>Temperaments: </b>
                {item.temperaments.join(", ")}.
              </p>
            ) : null}
            <p>
              <b>weight: </b>
              {item.weight} KG
            </p>
            <Link to={`/dogs/${item.id}`}>DETAIL</Link>
          </CardDiv>
        ))}
      </CardsContainer>
    </main>
  );
};

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 950px;
  max-height: auto;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media (max-width: 400px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Name = styled.h3`
  margin-top: 0px;
  width: 100%;
  height: 40px;
`;

export const ImgDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px;
  }
`;

export const CardDiv = styled.div`
  border-radius: 10px;
  border: grey 1px solid;
  margin-top: 15px;
  width: 20%;
  height: auto;
  max-height: 45%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: center;
  padding: 15px;
  background-color: rgb(197, 199, 199, 0.75);
  :hover {
    box-shadow: 2px 2px 2px 2px black;
    border: 1px solid black;
  }

  p {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 7px 15px;
    background-color: rgb(159, 43, 43);
    border-radius: 5px;
    cursor: pointer;
    margin-top: auto;
    box-shadow: 3px 2px 0 0 black;
  }

  @media (max-width: 800px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

`;

export default HomeCards;

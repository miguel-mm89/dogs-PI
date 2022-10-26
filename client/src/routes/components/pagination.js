import React from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Pagination({
  cardPerPage,
  totalCards,
  paginate,
  currentPage,
}) {
  if (Math.ceil(totalCards / cardPerPage) < currentPage) {
    paginate(1);
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <NextPrev>
        {currentPage - 5 >= 1 ? (
          <button onClick={() => paginate(currentPage - 5)}>
           <p>-5</p><GrPrevious /> 
          </button>
        ) : null}
      </NextPrev>
      <NextPrev>
        {currentPage - 1 ? (
          <button onClick={() => paginate(currentPage - 1)}>
            <GrPrevious />
          </button>
        ) : null}
      </NextPrev>
      <NumbersDiv>{currentPage}</NumbersDiv>
      <NextPrev>
        {currentPage < pageNumbers.length ? (
          <button onClick={() => paginate(currentPage + 1)}>
            <GrNext />
          </button>
        ) : null}
      </NextPrev>
      <NextPrev>
        {currentPage + 5 <= pageNumbers.length ? (
          <button onClick={() => paginate(currentPage + 5)}>
            <GrNext /><p>+5</p>
          </button>
        ) : null}
      </NextPrev>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  justify-content: center;
  margin-top: 30px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  background-color: rgb(240, 181, 80);
  border-radius: 10px;
  align-items: center;
  height: 40px;
  overflow: hidden;
  box-shadow: 4px 3px rgb(0,0,0,.3);
`;

const NumbersDiv = styled.div`
  padding: 10px;
  border-radius: 20%;
  color: white;
  width: 25px;
  height: 25px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(0, 0, 0, 0.8);

`;

const NextPrev = styled.div`
  width: 25px;
  padding: 8px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 40%;
  height: 25px;
  margin: 7px;

  button {
    background: none;
    cursor: pointer;
    font-size: 22px;
    align-content: center;
    border: none;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    height: 25px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;

    p {
      font-size: 15px;
      margin: auto;
      font-weight: 600;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../../redux/actions";

export default function Pagination({ cardPerPage, totalCards }) {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  if (Math.ceil(totalCards / cardPerPage) < currentPage) {
    dispatch(paginate(1));
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageShow = pageNumbers.slice(0, 5);
  if (pageNumbers.length > 5 && currentPage > 3) {
    pageShow = pageNumbers.slice(currentPage - 3, currentPage + 2);
  }
  if (currentPage === pageNumbers.length - 1 && currentPage > 4) {
    pageShow = pageNumbers.slice(currentPage - 4, currentPage + 2);
  }
  if (currentPage === pageNumbers.length && currentPage + 1 > 5) {
    pageShow = pageNumbers.slice(currentPage - 5, currentPage + 2);
  }

  return (
    <>
      <PaginationContainer>
        <NextPrev>
          <button
            disabled={currentPage === 1 ? true : false}
            className={currentPage === 1 ? "disable" : null}
            onClick={() => dispatch(paginate(currentPage - 1))}
          >
            <GrPrevious />
          </button>
        </NextPrev>
        <NumbersDiv>
          {pageShow?.map((item) => (
            <div className={currentPage === item ? "active" : null} key={item}>
              <button onClick={() => dispatch(paginate(item))}>{item}</button>
            </div>
          ))}
        </NumbersDiv>
        <NextPrev>
          <button
            className={currentPage === pageNumbers.length ? "disable" : null}
            disabled={currentPage === pageNumbers.length ? true : false}
            onClick={() => dispatch(paginate(currentPage + 1))}
          >
            <GrNext />
          </button>
        </NextPrev>
      </PaginationContainer>
    </>
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
  height: 34px;
  overflow: hidden;
  box-shadow: 4px 3px rgb(0, 0, 0, 0.3);
`;

const NumbersDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 300px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  button {
    background: none;
    cursor: pointer;
    font-size: 20px;
    border: none;
    display: flex;
    flex-direction: row;
    /* margin-right: 5px; */
  }
  .active {
    background-color: rgb(129, 50, 54);
    height: 90%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    button {
      padding: 10px;
      color: whitesmoke;
      margin: 3px;
    }
  }
`;

const NextPrev = styled.div`
  width: 25px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 25px;
  margin: 7px;
  border-radius: 25%;

  .disable {
    display: none;
    /* color: aquamarine; */
  }

  button {
    background: none;
    cursor: pointer;
    font-size: 22px;
    border: none;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    height: 25px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

import React from "react";
import {
  getByTemperaments,
  filterBy,
  chargeAll,
  orderBy,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SearchBar from "./searchBar";
import styled from "styled-components";

const FilterBy = () => {
  const dispatch = useDispatch();

  const temperaments = useSelector((state) => state.temperaments);

  const handleSelect = (e) => {
    dispatch(getByTemperaments(e.target.value));
    e.target.value = "default";
  };

  const handleSelect2 = (e) => {
    dispatch(orderBy(e.target.value));
    e.target.value = "default";
  };

  return (
    <section>
      <SelectDiv>
        <select onChange={handleSelect} name="" id="">
          <option value="default">FILTER BY</option>
          <optgroup label="TEMPERAMENTS:">
            {temperaments &&
              temperaments.map((el) => (
                <option className="options" key={el.name} value={el.name}>
                  {el.name}
                </option>
              ))}
          </optgroup>
        </select>
        <select onChange={handleSelect2} name="" id="">
          <option value="default">ORDER BY</option>
          <optgroup className="options" label="Weight">
            <option className="options" value="asc">Max to Min</option>
            <option className="options" value="desc">Min to Max</option>
          </optgroup>
          <optgroup className="options" label="Alphabetic">
            <option className="options" value="A-Z">A - Z</option>
            <option className="options" value="Z-A">Z - A</option>
          </optgroup>
        </select>
        <SearchDiv>
          <SearchBar />
        </SearchDiv>
        <Buttons>
          <button value="TODOS" onClick={() => dispatch(chargeAll())}>
            ALL
          </button>
          <button value="DB" onClick={() => dispatch(filterBy("DB"))}>
            DATABASE
          </button>
          <button value="API" onClick={() => dispatch(filterBy("API"))}>
            API
          </button>
        </Buttons>
      </SelectDiv>
    </section>
  );
};

const SelectDiv = styled.section`
  width: 100%;
  display: flex;
  margin-top: 25px;
  height: 28px;
  margin-left: 15px;
  margin-right: 25px;


  select {
    margin-right: 10px;
    background: none;
    border-radius: 5px;
    background-color: rgb(240, 181, 80);
    color: black;
    font-weight: bold;
    border: 1px black solid;
    padding: 5px;
    text-align: center;
    width: 120px;
  
  }

  .options{
    text-align: left;
  }

`;

const Buttons = styled.div`
  position: relative;
  text-align: end;
  width: 350px;
  margin-right: 15px;


  button {
    margin-left: 10px;
    background: none;
    background-color: rgb(240, 181, 80);
    border: 1px black solid;
    padding: 5px 10px;
    height: 28px;
    width: 100px;
    cursor: pointer;
    border-radius: 5px;
    color: black;
    font-weight: 600;
  }
`;

const SearchDiv = styled.div`
  width: auto;
  margin-left: 17%;
  margin-right: auto;
 
`;

export default FilterBy;

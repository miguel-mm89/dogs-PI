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
          <option value="default">FILTER BY...</option>
          <optgroup label="TEMPERAMENTS...">
            {temperaments &&
              temperaments.map((el) => (
                <option key={el.name} value={el.name}>
                  {el.name}
                </option>
              ))}
          </optgroup>
        </select>

        <select onChange={handleSelect2} name="" id="">
          <option value="default">ORDER BY...</option>
          <optgroup label="Weight">
            <option value="asc">Max to Min</option>
            <option value="desc">Min to Max</option>
          </optgroup>
          <optgroup label="Alphabetic">
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
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

const SelectDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  select {
    margin-right: 10px;
  }
`;

const Buttons = styled.div`
  position: relative;
  justify-content: end;
  text-align: end;
  width: 35%;
  margin-right: 5px;
  button{
    margin-left: 10px;
    
  }
`

const SearchDiv = styled.div`
  width: 40%;
  text-align: center;
 
`;

export default FilterBy;

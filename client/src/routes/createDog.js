import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../redux/actions";
import styled from "styled-components";
import NavBar from "./components/navBar";
import { Link } from "react-router-dom";

const CreateDog = () => {
  const tempForm = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);
  const initialState = {
    name: "",
    heightmin: "",
    heightmax: "",
    weightmin: "",
    weightmax: "",
    life_spanmin: "",
    life_spanmax: "",
    temperaments: [],
    temperamentShow: [],
    image: "",
  };
  const [errors, setErrors] = useState({ form: "complete form" });
  const [completed, setCompleted] = useState(initialState);

  const finalForm = {
    name: completed.name,
    height: `${completed.heightmin} - ${completed.heightmax}`,
    weight: `${completed.weightmin} - ${completed.weightmax}`,
    life_span: `${completed.life_spanmin} - ${completed.life_spanmax} years`,
    temperament: completed.temperaments.map((item) => parseInt(item)),
    image: completed.image,
  };

  useEffect(() => {
    if (tempForm.length === 0) return dispatch(getTemperaments());
  }, [tempForm.length, dispatch]);

  const validate = (completed) => {
    let errors = {};
    if (!completed.name) {
      errors.name = "Dog Name is required";
    } else if (completed.name.length < 3) {
      errors.name = "Dog Name must have at least 3 characters";
    }
    if (!completed.heightmin || !completed.heightmax) {
      errors.height = "Dog height is required";
    } else if (completed.heightmax <= completed.heightmin) {
      errors.height = "Height-max must be highter than height-min";
    }
    if (!completed.weightmin || !completed.weightmax) {
      errors.weight = "Dog height is required";
    } else if (completed.weightmax <= completed.weightmin) {
      errors.weight = "Weight-max must be highter than height-min";
    }
    if (!completed.life_spanmin || !completed.life_spanmax) {
      errors.life_span = "Dog life span is required";
    } else if (completed.life_spanmax <= completed.life_spanmin) {
      errors.life_span = "Life span-max must be highter than life span-min";
    }
    if (completed.temperaments.length === 0) {
      errors.temperaments = "Temperaments are required";
    }

    return errors;
  };

  const handleChange = (e) => {
    setCompleted({ ...completed, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTemperaments = (e) => {
    if (!completed.temperaments.includes(e.target.value)) {
      completed.temperaments.push(e.target.value);
    }
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.values(errors).length === 0) {
      console.log(finalForm);
      axios.post("http://localhost:3001/dogs", finalForm);
      setCreate(!create);
      setCompleted(initialState);
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <FormContainer create={create}>
          {!create ? (
            <h2>COMPLETE THE FORM</h2>
          ) : (
            <h2 className="create">BREED HAS BEEN CREATE SUCCESSFULLY</h2>
          )}
          <Form onSubmit={handleSubmit}>
            <Label>Breed Name:</Label>
            <input
              type="text"
              name="name"
              value={completed.name}
              onChange={handleChange}
            />
            {errors.name ? <label>{errors.name}</label> : null}
            <br />
            <Label>Height:</Label>
            <input
              type="Number"
              name="heightmin"
              className="number"
              placeholder="Height-Min"
              value={completed.heightmin}
              onChange={handleChange}
            />
            <input
              type="Number"
              name="heightmax"
              className="number"
              placeholder="Height-Max"
              value={completed.heightmax}
              onChange={handleChange}
            />
            {errors.height ? <label>{errors.height}</label> : null} <br />
            <Label>Weight:</Label>
            <input
              type="Number"
              name="weightmin"
              className="number"
              placeholder="Weight-Min"
              value={completed.weightmin}
              onChange={handleChange}
            />
            <input
              type="Number"
              name="weightmax"
              className="number"
              placeholder="Weight-Max"
              value={completed.weightmax}
              onChange={handleChange}
            />
            {errors.weight ? <label>{errors.weight}</label> : null} <br />
            <Label>Life Span:</Label>
            <input
              name="life_spanmin"
              value={completed.life_spanmin}
              placeholder="Life Span-Min"
              type="Number"
              className="number"
              onChange={handleChange}
            />
            <input
              name="life_spanmax"
              value={completed.life_spanmax}
              placeholder="Life Span-Max"
              type="Number"
              onChange={handleChange}
            />
            {errors.life_span ? <label>{errors.life_span}</label> : null} <br />
            <Label>Image (url):</Label>
            <input
              name="image"
              value={completed.image}
              placeholder="Put a URL"
              type="text"
              onChange={handleChange}
            />
            <br />
            <p>Temperaments:</p>{" "}
            {tempForm?.map((item) =>
              completed.temperaments.includes(item.id) ? (
                <p>{item.name}</p>
              ) : null
            )}
            <select name="temperaments" onChange={handleTemperaments}>
              <option value="default">Choose</option>
              {tempForm?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.temperaments ? <label>{errors.temperaments}</label> : null}
            <br />
            {!create ? (
              <button type="submit">Submit</button>
            ) : (
              <Link onClick={dispatch(getDogs())} to="/home">
                BACK HOME
              </Link>
            )}
            <br />
          </Form>
        </FormContainer>
      </section>
    </>
  );
};

const FormContainer = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  background-color: rgb(197, 199, 199, 0.7);
  text-align: left;

  h2 {
    text-align: center;
    padding: 25px;
    color: ${(props) => (props.create ? "green" : "black")};
  }
  label {
    color: red;
    font-weight: 500;
  }
`;
const Label = styled.p`
  margin-left: 35px;
  padding: 0px;
`;

const Form = styled.form`
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  p {
    margin: 12px;
    font-weight: 600;
  }

  select {
    margin-bottom: 15px;
  }

  button {
    color: white;
    background-color: red;
    border: none;
    font-weight: 600;
    position: relative;
    margin-top: auto;
    top: 60px;
    padding: 10px 135px;
    border-radius: 5px;
    cursor: pointer;
  }

  a {
    color: white;
    background-color: green;
    border: none;
    font-weight: 600;
    position: relative;
    margin-top: auto;
    top: 60px;
    padding: 7px 135px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default CreateDog;

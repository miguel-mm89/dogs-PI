import axios from "axios";

export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_BY_NAME = 'GET_BY_NAME';
export const ORDER_BY = 'ORDER_BY';
export const CLEAN = 'CLEAN'
export const GET_BY_TEMPERAMENTS = 'GET_BY_TEMPERAMENTS'
export const VOLVER_A_HOME = 'VOLVER_A_HOME'
export const FILTER_BY = 'FILTER_BY'
export const CHARGE_ALL = 'CHARGE_ALL'
export const DELETE = 'DELETE'



export function getDogs() {
  return async function (dispatch) {
    try {
      var res = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: GET_DOGS,
        payload: res.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}


export function getTemperaments() {
  return async function (dispatch) {
    try {
      var res = await axios.get("http://localhost:3001/temperaments");
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: res.data
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function getByName(payload) {
  return function (dispatch) {
    dispatch({ type: GET_BY_NAME, payload });
  };
}


export function getDetail(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then((res) => {
        dispatch({ type: GET_DETAIL, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}



export function getByTemperaments(payload) {
  return function (dispatch) {
    dispatch({ type: GET_BY_TEMPERAMENTS, payload });
    
  };
}

export function filterBy(payload) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY, payload });
  };
}

export function chargeAll() {
  return function (dispatch) {
    dispatch({ type: CHARGE_ALL });
    };
}

export function orderBy(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
    };
}

export function clean(){
  return function(dispatch){
    dispatch({type:CLEAN})
  }
}
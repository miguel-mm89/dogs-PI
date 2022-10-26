import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DETAIL,
  GET_BY_NAME,
  ORDER_BY,
  CLEAN,
  GET_BY_TEMPERAMENTS,
  FILTER_BY,
  CHARGE_ALL,
} from "./actions";

const initialState = {
  dogs: [],
  temperaments: [],
  filtered: 'LOADING...',
  dogDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filtered: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case CLEAN:
      return {
        ...state,
        dogDetail: {},
      };

    case GET_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_BY_NAME:
        let byname = state.dogs.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase()))
        if(byname.length === 0){
          return {
            ...state,
            filtered: 'NO FOUND'
          }
        } else return{
          ...state,
          filtered: byname
        }

    case GET_BY_TEMPERAMENTS:
      return {
        ...state,
        filtered: state.dogs.filter((el) =>
          el.temperaments ? el.temperaments.includes(action.payload) : null
        )}

    case CHARGE_ALL:
      return { ...state, filtered: state.dogs };

    case FILTER_BY:
      if (action.payload === "DB") {
        let data = state.dogs.filter((item) => typeof item.id === "string")
        if(data.length <= 0){
          return {
            ...state,
            filtered: 'NO_BREEDS'
          }
        } else
        return {
          ...state,
          filtered: data
        };
      } else {
        return {
          ...state,
          filtered: state.dogs.filter((item) => typeof item.id === "number"),
        };
      }

    case ORDER_BY:
      if (action.payload === "A-Z") {
        return {
          ...state,
          filtered: [...state.filtered].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }

      if (action.payload === "Z-A") {
        return {
          ...state,
          filtered: [...state.filtered].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }

      if (action.payload === "desc") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (prev, next) => prev.weight.slice(0, 2) - next.weight.slice(0, 2)
          ),
        };
      }

      if (action.payload === "asc") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (prev, next) => next.weight.slice(0, 2) - prev.weight.slice(0, 2)
          ),
        };
      } else {
        return { ...state, filtered: state.dogs };
      }

    default:
      return state;
  }
}

export default rootReducer;

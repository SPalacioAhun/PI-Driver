/* eslint-disable no-case-declarations */
import {
    GET_DRIVERS,
    SEARCH_DRIVERS_SUCCESS,
    ORDER,
    ORDENBYDOB,
    ORDENBYID,
    GET_ALL_API_BD,
    GET_TEAMS,
    FILTERTEAMS,
    GET_DETAIL,
    CLEAR_DETAIL,
  } from "./actions";
  
  const initialState = {
    driver: [],
    copyDriver: [],
    teams: [],
    postDriver: [],
    detail: {},
    notFound: false,
  };
  
  const redurce = (state = initialState, action) => {
    switch (action.type) {
      case GET_DRIVERS:
        return {
          ...state,
          driver: action.payload,
          copyDriver: action.payload,
          notFound: false,
        };
  
      case GET_TEAMS:
        return {
          ...state,
          teams: action.payload,
        };
  
      case SEARCH_DRIVERS_SUCCESS:
        if (action.payload.error) {
          return {
            ...state,
            copyDriver: [],
            notFound: true,
          };
        } else {
          return {
            ...state,
            copyDriver: action.payload,
            notFound: false,
          };
        }
  
      case GET_ALL_API_BD:
        return {
          ...state,
          copyDriver:
            action.payload === "api"
              ? state.driver.filter((drivers) => typeof drivers.id === "number")
              : action.payload === "bd"
              ? state.driver.filter((drivers) => typeof drivers.id !== "number")
              : state.driver,
        };
  
      case FILTERTEAMS:
        return {
          ...state,
          copyDriver: state.driver.filter((t) => {
            if (t.team) {
              return t.team.includes(action.payload);
            }
          }),
        };
        
      case ORDER:
        const ordenDriver = [...state.copyDriver];
  
        return {
          ...state,
          copyDriver:
            action.payload === "A"
              ? ordenDriver.sort((a, b) => a.firstName.localeCompare(b.firstName))
              : ordenDriver.sort((a, b) =>
                  b.firstName.localeCompare(a.firstName)
                ),
        };

      case ORDENBYDOB:
        const ordenByDod = [...state.copyDriver];
  
        return {
          ...state,
          copyDriver:
            action.payload === "A"
              ? ordenByDod.sort((a, b) => a.birthDate.localeCompare(b.birthDate))
              : ordenByDod.sort((a, b) => b.birthDate.localeCompare(a.birthDate)),
        };

        
      case ORDENBYID:
        const ordenById = [...state.copyDriver];
  
        return {
          ...state,
          copyDriver:
            action.payload === "A"
              ? ordenById.sort((a, b) => a.id - b.id)
              : ordenById.sort((a, b) => b.id - a.id),
        };

        case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
      
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: {},
      };
      
  
      default:
        return { ...state };
    }
  };
  export default redurce;
  
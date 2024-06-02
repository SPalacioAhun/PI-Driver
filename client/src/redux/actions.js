import axios from "axios";

//ACTIONS-TYPES
export const GET_DRIVERS = "GET_DRIVERS";
export const SEARCH_DRIVERS_SUCCESS = "SEARCH_DRIVERS_SUCCESS";
export const ORDER = " ORDER";
export const ORDENBYDOB = "ORDENBYDOB";
export const ORDENBYID = "ORDENBYID";
export const GET_TEAMS = "GET_TEAMS";
export const GET_ALL_API_BD = "GET_ALL_API_BD";
export const FILTERTEAMS = "FILTERTEAMS";
export const POSTDRIVERS = "POSTDRIVERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";


//ACTIONS
export const getDrivers = () => {
    return async function (dispatch) {
      try {
        const apiDrivers = await axios.get("http://localhost:3001/drivers");
        const drivers = apiDrivers.data;
  
        dispatch({ type: GET_DRIVERS, payload: drivers });
      } catch (error) {
      
        console.error("Error al obtener los conductores:", error);
        // Puedes despachar una acción adicional si quieres manejar el error en el estado de tu aplicación
        // dispatch({ type: GET_DRIVERS_ERROR, payload: error });
      }
    };
  };
  
  export const getTeamsAll = () => {
    return async function (dispatch) {
      try {
        const team = await axios.get("http://localhost:3001/teams");
        const obTeams = team.data;
        dispatch({
          type: GET_TEAMS,
          payload: obTeams,
        });
      } catch (error) {
        dispatch(error.message);
      }
    }
  };
  
  export const searchDrivers = (name) => {
    return async (dispatch) => {
      try {
        let response = await axios.get(
          "http://localhost:3001/drivers?name=" + name
        );
        return dispatch({
          type: SEARCH_DRIVERS_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        return dispatch({
          type: SEARCH_DRIVERS_SUCCESS,
          payload: { error: error },
        });
      }
    };
  };

  
  export const posDrivers = (formData) => {
    return async function () {
      try {
      
        // En lugar de enviar una solicitud POST vacía, envía los datos en el cuerpo de la solicitud
        await axios.post("http://localhost:3001/drivers", formData);
  
        alert("Conductor creado exitosamente:", formData);
      } catch (error) {
        console.error("Error al crear el conductor:", error);
      }
    };
  };
  
  export const filTrarTeams = (ordenTeams) => {
    return function (dispatch) {
      try {
        dispatch({
          type: FILTERTEAMS,
          payload: ordenTeams,
        });
      } catch (error) {
        dispatch(error.message);
      }
    };
  };
  export const getAllApiBd = (apiAllBd) => {
    return {
      type: GET_ALL_API_BD,
      payload: apiAllBd,
    };
  };
  export const ordenDriver = (orden) => {
    return {
      type: ORDER,
      payload: orden,
    };
  };
  export const ordenDriverDod = (dod) => {
    return {
      type: ORDENBYDOB,
      payload: dod,
    };
  };
  export const ordenDriverId = (id) => {
    return {
      type: ORDENBYID,
      payload: id,
    };
  };

  export const getDetail = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      
        const data = Array.isArray(response.data) ? response.data[0] : response.data; // Asegúrate de obtener un objeto
        dispatch({
          type: "GET_DETAIL",
          payload: data,
        });
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };
  };
    
    export const clearDetail = () => {
      return {
        type: CLEAR_DETAIL,
      };
    };

    export const deleteDrivers = (id) => {
      return async (dispatch) => {
        try {
          await axios.delete(`http://localhost:3001/drivers/${id}`);
          
          alert("Conductor eliminado");
          dispatch({
            type: "REMOVE_DRIVERS",
            id,
          });
        } catch (error) {
          alert("Este conductor no se puede eliminar. Solo puedes eliminar los creados.");
        }
      };
    };
      
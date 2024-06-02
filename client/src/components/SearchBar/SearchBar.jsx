import { useDispatch, useSelector } from "react-redux";
import { searchDrivers, getDrivers } from "../../redux/actions";
import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error
  const name = useSelector((state) => state.copyDriver);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(searchDrivers(searchTerm));
    }
  };

  const handleShowAll = () => {
    dispatch(getDrivers());
    setSearchTerm("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Validar si el valor ingresado contiene números
    if (/\d/.test(value)) {
      setErrorMessage("No se pueden ingresar números");
    } else {
      setErrorMessage("");
      setSearchTerm(value);
    }
  };

  return (
    <div className={style.divSearvbar}>
      <select
        className={style.name}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
        <option value="">Seleccionar un nombre</option>
        {name?.map((te) => (
          <option key={te.id} value={te.firstName}>
            {te.firstName}
          </option>
        ))}
      </select>
      <div className={style.searchContainer}>
        <input
          className={style.input}
          type="text"
          value={searchTerm}
          onChange={handleInputChange} // Cambiado el manejador de eventos para la entrada
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
        {/* Mostrar mensaje de error */}
        {!name.length && (
          <div className={style.errorMessage}>
            <h5>Ningún piloto coincide con tu búsqueda</h5>
          </div>
        )}
      </div>
      <button className={style.buscar} onClick={handleSearch}>
        Buscar
      </button>
      <button className={style.todo} onClick={handleShowAll}>
        Mostrar Todos
      </button>
    </div>
  );
};

export default SearchBar;

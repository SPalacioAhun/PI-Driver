// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getDrivers,
    getTeamsAll,
    ordenDriver,
    filTrarTeams,
    ordenDriverDod,
    getAllApiBd,

} from "../../redux/actions";

import style from "./Home.module.css";
// componentes
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Navbar from "../../components/Navbar/Navbar";
import loading from "../../assets/pit-loading.webp";


const Home = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.copyDriver);
  const teams = useSelector((state) => state.teams);
  //const [, setOrden] = useState("");



  const [currentPage, setCurrentPage] = useState(1);
  const GAMESXPAGE = 9;
  const LAST_PAGE = Math.ceil(allDrivers.length / GAMESXPAGE);


  const handleClick = (event) => {
    switch (event.target.name) {
      case "first":
        setCurrentPage(1);
        break;
      case "prev":
        setCurrentPage(currentPage - 1);
        break;
      case "next":
        setCurrentPage(currentPage + 1);
        break;
      case "last":
        setCurrentPage(LAST_PAGE);
        break;
      default:
        setCurrentPage(parseInt(event.target.name));
        break;
    }
  };
  const firsrItem = GAMESXPAGE * (currentPage - 1);
  const lastItem = firsrItem + GAMESXPAGE;
  const showedCards = allDrivers.slice(firsrItem, lastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [allDrivers]);

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeamsAll());

  }, [dispatch]);



  // A-Z Z-A
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(ordenDriver(e.target.value));
    setCurrentPage(1);
    // setOrden(`Ordenado ${e.target.value}`);
  };

  //Creados - api
  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(getAllApiBd(e.target.value));
    setCurrentPage(1)

  };

  //Fecha
  const handleSortBirthdate = (e) => {
    e.preventDefault();
    if (e.target.value !== "fecha") dispatch(ordenDriverDod(e.target.value));
    setCurrentPage(1);
    //setOrden(`Ordenado ${e.target.value}`);
  };

  //escuderias
  const handleFilterTypes = (e) => {
    e.preventDefault();
    if (e.target.value !== "Equipos") {
      dispatch( filTrarTeams(e.target.value));
       setCurrentPage(1);
    }
  };


  return (
    <div className={style.homeContainer}>
      <Navbar  />

      <div className={style.containerButton}>

        <select onChange={(e) => handleSort(e)} className={style.azButton}>
          <option value="A">A - Z</option>
          <option value="D">Z - A</option>
        </select>
        <select
          onChange={(e) => handleFilterTypes(e)}
          className={style.typesButton}
        >
          <option>Equipos</option>
          <option value="">Todos</option>
          {teams?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
         <select
          onChange={(e) => handleSortBirthdate(e)}
          className={style.attackButton}
        >
          <option value="fecha">Fecha</option>
          <option value="A">AscenDod</option>
          <option value="D">DescenDob</option>
        </select>

        <select
          onChange={(e) => handleFilterCreated(e)}
          className={style.origenButton}
        >
          <option value="All">Origen</option>
          <option value="bd">Creados</option>
          <option value="api">Api</option>
        </select>
      </div>
      <Pagination
         currentPage={currentPage}
        LAST_PAGE={LAST_PAGE}
        handleClick={handleClick}
      />
  <div className={style.linkCard}>
  {showedCards.length ? (
    <Cards dataDriver={showedCards} />
  )
   : (
    <div className={style.containerLoading}>
      <img className={style.mime} src={loading} alt="driver cargando" />
      <p className={style.loading}><strong>Cargando...</strong></p>
    </div>
  )}
</div>

    </div>
  );
};

export default Home;
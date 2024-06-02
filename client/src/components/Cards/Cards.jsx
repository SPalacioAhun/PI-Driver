/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css"
import { deleteDrivers, getDrivers } from "../../redux/actions"

const Cards = ({ dataDriver }) => {
  const dispatch = useDispatch();

  const eliminar = async (id) => {
    await dispatch(deleteDrivers(id));
    dispatch(getDrivers());
  };

  return (
   <div>
    <div className={style.linkCard}>
      {dataDriver.map(driver => (
        <Card
          key={driver.id}
          id={driver.id}
          image={driver.image}
          firstName={driver.firstName}
          birthDate={driver.birthDate}
          team={driver.team}
          eliminar={() => eliminar(driver.id)}
        />

      
      ))}
    </div>
   </div> 
  );
};


export default Cards;
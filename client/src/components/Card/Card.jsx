/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, id, firstName, birthDate, team, eliminar }) => {
  return (
    <div className={style.cardContainer} key={id}>
      <button className={style.deleteButton} onClick={eliminar}>X</button>
      <div className={style.cardTitle}>
        <h2 className={style.nameCard}>{firstName}</h2>
        <h5 className={style.hp}>{birthDate}</h5>
        <h5 className={style.hp}>{team}</h5>
      </div>
      <div className={style.cardInfo}>
      <Link to={`/detail/${id}`}>
          <img src={image} alt={firstName} />
      </Link>
      </div>
    </div>
  );
};
export default Card;

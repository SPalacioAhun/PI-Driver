import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../../redux/actions";
import style from "../Detail/Detail.module.css";


const Detail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(clearDetail())
        }     
        
    }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);

    
  return (
    <div className={style.detail}>
      <h1>Detalles del piloto</h1>
      {detail && (
        <div>
          <h2>{detail.firstName} {detail.lastName}</h2>
          <p>Nacionalidad: {detail.nationality}</p>
          <p>Fecha de nacimiento: {detail.birthDate}</p>
          <p>Escuderias: {detail.team}</p>
          <p>{detail.description}</p>
          <img src={detail.image} alt="driver" />
          
        </div>
      )}  
          <Link to={"/home"}>
            <button>
                <span>Volver</span>
            </button>
          </Link>
    </div>
  );
}; 


export default Detail;
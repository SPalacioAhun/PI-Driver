import { Link } from "react-router-dom";
import style from "../About/About.module.css"
import fondo from "../../assets/fondo-about.jpeg"

const About = () => {
  return (
    <div>
        <Link to={"/home"} className={style.spanBo}>
        <button className={style.buttonVolver}>
          <span className={style.volverSpan}>Volver</span>
        </button>
      </Link>
    <div className={style.aboutContainer}>
      <img src={fondo} alt="Imagen de fondo" className={style.fondo} />
      <h2>¡Hola! Soy Santiago Palacio.</h2>
      <p className={style.boldText}>Soy estudiante de programación Full Stack Developer en la academia Soy Henry.</p>
      <p className={style.boldText}>Tengo dos hijos y vivo en la hermosa ciudad de Tandil, provincia de Buenos Aires.</p>
      <p className={style.boldText}>En mi tiempo libre me gusta dedicarme a aprender nuevas tecnologías y pasar tiempo de calidad con mi familia.</p>
      <p className={style.boldText}>No hay nada que disfrute más que resolver problemas complejos y construir soluciones creativas.</p>
      <p className={style.boldText}>¡Siempre estoy entusiasmado por aprender y crecer como desarrollador!</p>
      <p className={style.boldText}>tecnologías: React, Redux, Node, Express y Sequelize.</p>
    </div>
      
    </div>
  )
}

export default About
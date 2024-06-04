/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import stayle from "../Create/Create.module.css";
import validation from "../../components/Validate/Validate";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsAll, posDrivers } from "../../redux/actions";

const Create = () => {
  const allDriver = useSelector((state) => state.teams);
  const dispatch = useDispatch();


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    nationality: "",
    image: "",
    description: "",
    teams: [],
  });


  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === "teams") {
      setForm({
        ...form,
        [event.target.name]: [...form[event.target.name], event.target.value],
      });

      setErrors(
        validation({
          ...form,
          [event.target.name]: event.target.value,
        })
      );
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
      setErrors(
        validation({
          ...form,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convierte el array de equipos (form.teams) en una cadena JSON
    const teamsAsString = form.teams.join(", ");
    const formWithTeamsAsString = {
      ...form,
      teams: teamsAsString,
    };
    dispatch(posDrivers(formWithTeamsAsString));
    setForm({
      firstName: "",
      lastName: "",
      birthDate: "",
      nationality: "",
      image: "",
      description: "",
      teams: [],
    });
    setErrors({})
    setFormSubmitted(false);
  };

  const disable = () => {
    if (formSubmitted) return true;
    let disabled = true;
    for (let error in errors) {
      
      if (errors[error] === "" || errors[error].length === 0) disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  useEffect(() => {
    dispatch(getTeamsAll());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleDelete = (teamName) => {
    setForm({
      ...form,
      teams: form.teams.filter((team) => team !== teamName),
    });
  };


  return (
    <div className={stayle.containerF}>
      <div className={stayle.guiaP}>
        <Link to={"/home"} className={stayle.spanBo}>
          <button className={stayle.buttonVolver}>
            
            <span className={stayle.spanV}>Volver</span>
          </button>
        </Link>
        <div className={stayle.containerGuia}>
          <div className={stayle.necesitasP}>
            <h3>Imágenes para crear tu driver</h3>
            <h4>
              Podés buscar aquí:{" "}
              <a
                className={stayle.linkParaCrear}
                href="https://pixabay.com/es/images/search/formula%201/#:~:text=M%C3%A1s%20de%202%20000%20im%C3%A1genes%20gratis%20de,Formula%201%20y%20F%C3%B3rmula%201%20-%20Pixabay"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </h4>
          </div>
          <div className={stayle.guiaP}>
            <h4 className={stayle.guia1}>Guia:</h4>
            <p>1- Elige la imagen deseada</p>
            <p>2- Haz click derecho sobre el mismo </p>
            <p>3- Selecciona "Copiar dirección de la imagen" </p>
            <p>4- Pega la dirección en el formulario </p>
            <p>5- Sigue creando tu driver! </p>
          </div>
        </div>
      </div>
      <div className={stayle.formContainer}>
      <h1 className={stayle.titulo}>Bienvenidos a tu creacion de tu equipo:</h1>
      <form className={stayle.custom_form} onSubmit={handleSubmit}>
        <label className={stayle.label} htmlFor="">
          Nombre
        </label>
        <input
          onChange={handleChange}
          name="firstName"
          className={stayle.input}
          type="text"
          value={form.firstName}
        />
        <div className={stayle.danger}>
          {errors.firstName ? (
            <p>{errors.firstName}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : null}
        </div>

        <label className={stayle.label} htmlFor="">
          Apellido
        </label>
        <input
          onChange={handleChange}
          name="lastName"
          className={stayle.input}
          type="text"
          value={form.lastName}
        />
        <div className={stayle.danger}>
          {" "}
          {errors.lastName ? (
            <p>{errors.lastName}</p>
          ) : errors.a2 ? (
            <p>{errors.a2}</p>
          ) : null}
        </div>

        <label className={stayle.label} htmlFor="">
          {" "}
          Fecha de nacimiento
        </label>
        <input
          onChange={handleChange}
          name="birthDate"
          className={stayle.input}
          type="date"
          value={form.birthDate}
        />
        <div className={stayle.danger}>
          {" "}
          {errors.birthDate ? (
            <p>{errors.birthDate}</p>
          ) : errors.birthDate ? (
            <p>{errors.birthDate}</p>
          ) : null}
        </div>

        <label className={stayle.label} htmlFor="">
          Nacionalidad
        </label>
        <input
          onChange={handleChange}
          name="nationality"
          className={stayle.input}
          type="text"
          value={form.nationality}
        />
        <div className={stayle.danger}>
          {" "}
          {errors.nationality ? (
            <p>{errors.nationality}</p>
          ) : errors.n1 ? (
            <p>{errors.n1}</p>
          ) : null}
        </div>

        <label className={stayle.label} htmlFor="">
          Imagen
        </label>
        <input
          onChange={handleChange}
          name="image"
          className={stayle.input}
          type="text"
          value={form.image}
        />
        <div className={stayle.danger}>
          {errors.image ? (
            <p>{errors.image}</p>
          ) : errors.i1 ? (
            <p>{errors.i1}</p>
          ) : null}
        </div>
        <label className={stayle.label} htmlFor="">
          Descripción
        </label>
        <textarea
          onChange={handleChange}
          name="description"
          className={stayle.textarea}
          type="text"
          value={form.description}
        />
        <div className={stayle.danger}>
          {errors.description ? (
            <p>{errors.description}</p>
          ) : errors.d1 ? (
            <p>{errors.d1}</p>
          ) : null}
        </div>

        <label className={stayle.label} htmlFor="">
          Escuderia/s
        </label>

        <select
          multiple
          className={stayle.teams}
          value={form.teams} 
          name="teams"
          id="teams"
          onChange={handleChange}
        >
          {allDriver.map((te) => (
            <option key={te.id} value={te.name}>
              {te.name}
            </option>
          ))}
        </select>
        <div className={stayle.danger}>
          {errors.teams && <p>{errors.teams}</p>}
        </div>
        {form.teams?.map((team, index) => (
          <div key={index} className={stayle.selectedTeam}>
            <label> {team}</label>
            <button
              type="button"
              onClick={() => handleDelete(team)}
              className={stayle.deleteButton}
            >
              x
            </button>
          </div>
        ))}
        <div className={stayle.danger}></div>
        <button
                
                type="submit"
                name="submit"
                disabled={disable()}
              >
                <span>Crear!</span>
                
              </button>
      </form>
      </div>
    </div>
  );
};
export default Create;

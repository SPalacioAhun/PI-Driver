/* eslint-disable no-useless-escape */
const Validate = ({
  firstName,
  lastName,
  birthDate,
  nationality,
  image,
  description,
  teams,
}) => {
  const errors = {};
  if (firstName === "") {
    errors.firstName = "El nombre no debe estar vacio";
  }
  if (!/^[a-zA-Z\s]+$/.test(firstName)) {
    errors.e2 = "debe contener solo letras";
  }

  if (lastName === "") {
    errors.lastName = "El Apellido no debe estar vacio";
  }
  if (!/^[a-zA-Z\s]+$/.test(lastName)) {
    errors.a2 = "debe contener solo letras";
  }

  if (!birthDate) {
    errors.birthDate = "La fecha de nacimiento no debe estar vacía";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    errors.birthDate =
      "El formato de fecha debe ser en Numeros y Año Mes Día (YYYY-MM-DD)";
  }

  if (nationality === "") {
    errors.nationality = "La nacionalidad no debe estar vacia";
  } else if (!/^[a-zA-Z\s]+$/.test(nationality)) {
    errors.n1 = "debe contener solo letras";
  }
  if (description === "") {
    errors.description = "La descripcion no  debe estar vacia";
  } else if (description.length < 50) {
    errors.d1 = "Debe tener mas de 50 caracteres";
  }
  const imageRegex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  if (image === "") {
    errors.image = "La URL de la imagen no debe estar vacía";
  } else if (!imageRegex.test(image)) {
    errors.i1 = "La URL de la imagen no es válida";
  }
  if (teams.length === 0) {
    errors.teams = "Debes seleccionar al menos un equipo";
  } else {
    errors.teams = "";
  }

  return errors;
};

export default Validate;

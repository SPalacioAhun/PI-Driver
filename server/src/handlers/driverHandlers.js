const {
    searhName,
    createDriver,
    getDriverId,
    getDriver,
    deleteId,
  } = require("../controllers/driverController");
  
  //-------------------------------------------------//
  //el handle de todos los driver y los nombres
  const driverGetHandler = async (req, res) => {
    try {
      const { name } = req.query;
      const result = name ? await searhName(name) : await getDriver();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  //-----------------------------------------------------//
  //buscar de los ID
  const driverGetIdHandrer = async (req, res) => {
    const { idDriver } = req.params;
    const origin = isNaN(idDriver) ? "bdd" : "api";
  
    try {
      const driver = await getDriverId(idDriver, origin);
      res.status(200).json(driver);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  //------------------------------------------//
  //Eliminar Driver en la base datos
  const idHandler = async (req, res) => {
    const { idDriver } = req.params;
    try {
      const driverDelete = await deleteId(idDriver);
      if (typeof driverDelete === "string") {
        return res.status(400).json(driverDelete);
      } else {
        return res.status(200).json(driverDelete);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  //---------------------------------------------------//
  // PARA CREARLOS DRIVER
  const driverPostHandler = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        description,
        image,
        nationality,
        birthDate,
        teams,
      } = req.body;
      const newDriver = await createDriver(
        firstName,
        lastName,
        description,
        image,
        nationality,
        birthDate,
        teams
      );
      res.status(201).json(newDriver);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
  module.exports = {
    driverGetHandler,
    driverGetIdHandrer,
    driverPostHandler,
    idHandler,
  };
  
require("dotenv").config();

const axios = require("axios");

const { Router } = require("express");
const router = Router();
const { dogsDBinfo, dogsAPI, dogsTOTALinfo, dogsAPIinfo } = require("../utils/index.js");
const { Dog, Temperament } = require("../db");

router.get("/", async (req, res) => {
//-------SI ENTRO POR QUERY----------
  if (req.query.name) {
    try {

      let {name} = req.query
      const dogs =  await dogsTOTALinfo()
      const result = dogs.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))

      if(result.length >= 1){
      res.status(200).json(result)}
      else{
        throw new Error(error)
      }
    } catch (error) {
      res.status(400).json(error);
    }
  } 
  //------------SI NO ENTRO POR QUERY DEVUELVO TODOS---------
  else {
    try {
      let total = await dogsTOTALinfo();
      res.status(200).json(total);
    } catch (error) {
      throw new Error(error);
    }
  }
});
//---------/:idRaza------------
router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;

  if (idRaza.includes("-")) {
    let dogDB = await Dog.findOne({
      where: {
        id: idRaza,
      },
      include: Temperament,
    });
    dogDB = JSON.stringify(dogDB);
    dogDB = JSON.parse(dogDB);

    //dejo un array con los nombres de temp solamente
    dogDB.temperaments = dogDB.temperaments.map((d) => d.name + ", ");
    res.json(dogDB);
  } else {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds/${idRaza}`
      );

      let {
        id,
        name,
        weight,
        height,
        life_span,
        temperament,
        reference_image_id,
      } = response.data;

      //CONVIERTO TODO A JSON CON SOLAMENTE LOS CAMPOS QUE ME PIDIERON Y LO RETORNO
      return res.json({
        id,
        name,
        weight: weight.metric,
        height: height.metric,
        life_span,
        temperaments: temperament,
        image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
      });
    } catch (err) {
      res.sendStatus(500);
      throw new Error("error");
    }
  }
});
//-------------------POST------------------------
router.post("/", async (req, res) => {
  let { name, weight, height, life_span, temperament, image } = req.body;

  const capitalizar = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (!name || !height || !weight)
    return res.status(400).json({ msg: "faltan datos" });

  try {
    image = await (
      await axios.get("https://dog.ceo/api/breeds/image/random")
    ).data.message;
    const dogCREATED = await Dog.findOrCreate({
      //devuelvo un array (OJOOO!!!!)

      where: {
        name: capitalizar(name),
        weight,
        height,
        life_span,
        image: image || "https://dog.ceo/api/breeds/image/random",
      },
    });

    await dogCREATED[0].setTemperaments(temperament); // relaciono ID genres al juego creado
    //console.log(dogCREATED[0])

    res.status(200).json(dogCREATED);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
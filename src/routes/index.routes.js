const { Router } = require("express");
const router = Router();
const connection = require("../dbConnection/connection");
const PokeModel = require("../models/pokemon.model");

router.get("/", async (req, res) => {
  try {
    await connection();
    const allPokemons = await PokeModel.find();
    console.log(allPokemons);
    res.render("index", {
      title: "Index desde el servidor con hbs y una variable!",
    });
    // res.send(allPokemons);
  } catch (error) {
    console.log(error);
  }
});

router.get("/blog", (req, res) => {
  res.render("blog", {
    title: "Página del blog!",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Página del contacto, aquí podés contactarme!",
  });
});

module.exports = router;

const { Router } = require("express");
const router = Router();

const animes = [
  {
    name: "Boku no hero",
    id: 1,
  },
  {
    name: "To your eternity",
  },
];

router.get("/", (req, res) => {
  res.send(animes);
});

module.exports = router;

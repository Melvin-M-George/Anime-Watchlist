const express = require("express");
const router = express.Router();
const animeController = require("../controllers/animeController");


router.get("/",animeController.getAllAnime);
router.post("/add",animeController.addAnime);
router.get("/watch/:id",animeController.markAsWatched);
router.get("/delete/:id",animeController.deleteAnime);


module.exports = router;

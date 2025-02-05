const Anime = require("../models/Anime");


const getAllAnime = async (req, res) => {
    try {
        const animes = await Anime.find();
        res.render("index", { animes });
    } catch (error) {
        console.error("Error fetching anime:", error);
        res.status(500).send("An error occurred while fetching anime.");
    }
}

const addAnime = async (req, res) => {
    try {
        const { title, description } = req.body;
        await Anime.create({ title, description });
        res.redirect("/");
    } catch (error) {
        console.log("Error adding anime", error);
        res.status(500).send("An error occurred while adding anime");
    }
}

const markAsWatched = async (req, res) => {
    try {
        const { id } = req.params;
        await Anime.findByIdAndUpdate(id, { watched: true });
        res.redirect("/");
    } catch (error) {
        console.log("Error marking as watched",error);
        res.status(500).send("An error occured while marking as watched");
    }
}


const deleteAnime = async (req,res) => {
    try {
        const {id} = req.params;
        await Anime.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log("Error deleting anime",error);
        res.status(500).send("An error occurred while deleting");
    }
}


module.exports = {
    getAllAnime,
    addAnime,
    markAsWatched,
    deleteAnime,
}
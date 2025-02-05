const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

const animeRoutes = require("./routes/animeRoutes");
app.use("/",animeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
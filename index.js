const express = require("express");
const formidableMiddleware = require("express-formidable");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());
app.use(cors());

// router
const router = express.Router();

// Importer les routes
const homeRoutes = require("./routes/home-route");
const comicsRoutes = require("./routes/comics-route");

// Activer les routes
app.use(homeRoutes);
app.use(comicsRoutes);

// expemple de requete >>  http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// requete axios sur bdd Marvel
// axios
//   .get("http://gateway.marvel.com/v1/public/comics", {
//     params: {
//       limit: 30,
//       apikey: public_key,
//       ts: ts,
//       hash: hash,
//     },
//   })
//   .then((response) => {
//     // console.log(response.data);
//     // console.log(response.data.data.results[1]);
//     console.log(response.data);
//     return response.data;
//   });

//récupération de la route venant du front

app.listen(3000, () => {
  console.log("Server has started");
});

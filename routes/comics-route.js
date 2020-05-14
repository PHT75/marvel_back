const express = require("express");
const router = express.Router();
const axios = require("axios");

//définir ma variable "ts"
const date = new Date();
const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en secondes
// console.log(Math.floor(timestamp));
const ts = Math.floor(timestamp);

//import de md5
const md5 = require("md5");
// console.log(md5("test"));

//mes cles
const private_key = process.env.MARVEL_SECRET_KEY;
const public_key = process.env.MARVEL_PUBLIC_KEY;

// schema de hash demandé par Marvel >> md5(ts+privateKey+publicKey)
const hash = md5(ts + private_key + public_key);
// console.log(hash);

router.get("/comics", async (req, res) => {
  const response = await axios.get(
    "http://gateway.marvel.com/v1/public/comics",
    {
      params: {
        limit: 100,
        apikey: public_key,
        ts: ts,
        hash: hash,
      },
    }
  );

  res.json(response.data);
  console.log(response.data.data);
});

module.exports = router;

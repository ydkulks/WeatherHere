const express = require("express");
const Datastore = require("nedb");
const fetch = require("node-fetch");
const app = express();
require("dotenv").config();
app.use(express.json());
const db = new Datastore({ filename: "database.db", autoload: true });

const port = process.env.PORT;

app.listen(port);
console.log(`Listening to port ${port}`);

app.use(express.static("root"));
express.Router("/view");

//***********API**********/
app.post("/api", (request, response) => {
  console.log("Post req received");
  db.insert(request.body);
  response.json(request.body);
});

app.post("/weather", async (req, res) => {
  console.log("Weather report request");
  const lat = req.body.lat;
  const long = req.body.long;

  const key = process.env.API_KEY;
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${long}&aqi=yes`;
  const request = await fetch(url);
  const req_json = await request.json();
  res.json(req_json);
});

app.get("/weather", (req, res) => {
  db.find({}, (err, docs) => {
    res.json(docs);
  });
});

const axios = require("axios");
const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const arr = [];
let j=59;

app.get("/", (req, res) => {
  const reqData = [];

  const url = "https://api.wazirx.com/api/v2/tickers?24h";
  axios
    .get(url)
    .then((response) => {
      for (let i in response.data) {
        arr.push(response.data[i]);
      }

      for (let i = 0; i < 10; i++) {
        reqData.push(arr[i]);
      }

      res.render("index", { data: reqData, t: j });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Trade List app listening on port ${port}`);
});

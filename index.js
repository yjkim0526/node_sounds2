const express = require("express");
var cors = require("cors");
const app = express();
port = 3030;

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/sound/:name", function (req, res) {
  const name = req.params.name;
  console.log(req.params);
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.get("/test", function (req, res) {
  res.sendfile("index.html");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

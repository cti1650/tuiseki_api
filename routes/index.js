var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send({ name: "太郎" });
  console.log("get");
});

router.post("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send({ name: "太郎" });
  console.log("get");
});

router.post("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send({ name: "太郎" });
  console.log("プリフライト");
});
router.options("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send();
});

module.exports = router;

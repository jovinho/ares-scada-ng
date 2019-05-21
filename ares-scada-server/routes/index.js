const express = require("express");
const router = express.Router();
const api = require("../api/ares-api");
const apiHooksService = require("../api-hooks/api-hooks-service");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Its workking");
});

router.post("/hook", function(req, res, next) {
  try {
    apiHooksService.treatHookRequest(req.body);
    res.sendStatus(200);
  } catch (e) {
    console.error("deu merda");
  }
});

module.exports = router;

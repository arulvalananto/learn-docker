const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Api is running at 3000!</h1>");
});

module.exports = router;

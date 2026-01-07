const express = require("express");
const router = express.Router();
const {generateApiKey} = require("../controllers/auth.controller");

router.post("/generate-key", generateApiKey);

module.exports = router;
const express = require("express");
const {handleGenerateNewShortURL} = require("../controller/url");
const router = express.Router();

router.post("/", (req, res))
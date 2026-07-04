const express = require("express");
const router = express.Router();
const { searchSessions } = require("../controllers/searchController");

router.get("/sessions", searchSessions);

module.exports = router;

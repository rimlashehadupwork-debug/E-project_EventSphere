const express = require("express");
const router = express.Router();
const {
  createSession,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
  bookmarkSession,
} = require("../controllers/sessionController");

router.post("/", createSession);
router.get("/", getAllSessions);
router.get("/:id", getSessionById);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);
router.post("/:id/bookmark", bookmarkSession);

module.exports = router;

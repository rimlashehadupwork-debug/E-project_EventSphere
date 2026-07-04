const express = require("express");
const router = express.Router();
const {
  registerAttendee,
  getAttendeeById,
  updateAttendee,
  getBookmarks,
  registerForEvent,
} = require("../controllers/attendeeController");

router.post("/register", registerAttendee);
router.get("/:id", getAttendeeById);
router.put("/:id", updateAttendee);
router.get("/:id/bookmarks", getBookmarks);
router.post("/:id/register-event", registerForEvent);

module.exports = router;

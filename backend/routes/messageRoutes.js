const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessagesForUser,
  getConversation,
  deleteMessage,
} = require("../controllers/messageController");

router.post("/", sendMessage);
router.get("/conversation/:id", getConversation); // specific route pehle
router.get("/:userId", getMessagesForUser);
router.delete("/:id", deleteMessage);

module.exports = router;

const Message = require("../models/Message");

// helper: consistent conversationId for two users (sorted ids joined)
const buildConversationId = (idA, idB) => [idA, idB].sort().join("_");

// POST /api/messages
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, text } = req.body;
    const conversationId = buildConversationId(senderId, receiverId);
    const message = await Message.create({ conversationId, senderId, receiverId, text });
    res.status(201).json({ success: true, data: message });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/messages/:userId  -> saare messages jo us user ko involve karte hain
exports.getMessagesForUser = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ senderId: req.params.userId }, { receiverId: req.params.userId }],
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/messages/conversation/:id  -> :id yahan conversationId hai
exports.getConversation = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id }).sort({ createdAt: 1 });
    res.status(200).json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE /api/messages/:id
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });
    res.status(200).json({ success: true, message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

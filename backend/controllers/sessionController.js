const Session = require("../models/Session");

// POST /api/sessions
exports.createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json({ success: true, data: session });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/sessions
exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate("expoId", "title");
    res.status(200).json({ success: true, data: sessions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/sessions/:id
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id).populate("expoId", "title");
    if (!session) return res.status(404).json({ success: false, message: "Session not found" });
    res.status(200).json({ success: true, data: session });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/sessions/:id
exports.updateSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!session) return res.status(404).json({ success: false, message: "Session not found" });
    res.status(200).json({ success: true, data: session });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE /api/sessions/:id
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.status(404).json({ success: false, message: "Session not found" });
    res.status(200).json({ success: true, message: "Session deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/sessions/:id/bookmark
exports.bookmarkSession = async (req, res) => {
  try {
    const { attendeeId } = req.body; // logged-in attendee ka id
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ success: false, message: "Session not found" });

    if (!session.bookmarkedBy.includes(attendeeId)) {
      session.bookmarkedBy.push(attendeeId);
      await session.save();
    }
    res.status(200).json({ success: true, data: session });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

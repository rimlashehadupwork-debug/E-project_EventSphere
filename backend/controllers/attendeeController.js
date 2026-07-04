const Attendee = require("../models/Attendee");

// POST /api/attendees/register
exports.registerAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json({ success: true, data: attendee });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/attendees/:id
exports.getAttendeeById = async (req, res) => {
  try {
    const attendee = await Attendee.findById(req.params.id)
      .populate("registeredEvents", "title")
      .populate("bookmarkedSessions", "title startTime");
    if (!attendee) return res.status(404).json({ success: false, message: "Attendee not found" });
    res.status(200).json({ success: true, data: attendee });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/attendees/:id
exports.updateAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!attendee) return res.status(404).json({ success: false, message: "Attendee not found" });
    res.status(200).json({ success: true, data: attendee });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/attendees/:id/bookmarks
exports.getBookmarks = async (req, res) => {
  try {
    const attendee = await Attendee.findById(req.params.id).populate("bookmarkedSessions");
    if (!attendee) return res.status(404).json({ success: false, message: "Attendee not found" });
    res.status(200).json({ success: true, data: attendee.bookmarkedSessions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/attendees/:id/register-event
exports.registerForEvent = async (req, res) => {
  try {
    const { expoId } = req.body;
    const attendee = await Attendee.findById(req.params.id);
    if (!attendee) return res.status(404).json({ success: false, message: "Attendee not found" });

    if (!attendee.registeredEvents.includes(expoId)) {
      attendee.registeredEvents.push(expoId);
      await attendee.save();
    }
    res.status(200).json({ success: true, data: attendee });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

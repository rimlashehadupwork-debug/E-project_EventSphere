const mongoose = require("mongoose");
const Session = require("../models/Session");
const Attendee = require("../models/Attendee");
// Note: Booth aur Exhibitor models Person 1 banayega.
// Yahan hum unhein registered model name se access kar rahe hain (mongoose.model("Booth"))
// taake dono modules ka code integrate karte waqt error na aaye.

// GET /api/analytics/expo/:id  -> ek expo ka overall summary
exports.getExpoAnalytics = async (req, res) => {
  try {
    const expoId = req.params.id;
    const totalSessions = await Session.countDocuments({ expoId });
    const totalAttendees = await Attendee.countDocuments({ registeredEvents: expoId });

    let totalBooths = 0;
    try {
      const Booth = mongoose.model("Booth");
      totalBooths = await Booth.countDocuments({ expoId });
    } catch (e) {
      /* Booth model abhi register nahi hua - Person 1 ka module add hone ke baad kaam karega */
    }

    res.status(200).json({
      success: true,
      data: { expoId, totalSessions, totalAttendees, totalBooths },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/analytics/booth-traffic
exports.getBoothTraffic = async (req, res) => {
  try {
    const Booth = mongoose.model("Booth");
    const traffic = await Booth.find().select("name visitorsCount expoId");
    res.status(200).json({ success: true, data: traffic });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Booth model available nahi (Person 1 ka module chahiye) ya: " + err.message,
    });
  }
};

// GET /api/analytics/attendee-engagement
exports.getAttendeeEngagement = async (req, res) => {
  try {
    const totalAttendees = await Attendee.countDocuments();
    const avgBookmarks = await Attendee.aggregate([
      { $project: { count: { $size: "$bookmarkedSessions" } } },
      { $group: { _id: null, avg: { $avg: "$count" } } },
    ]);
    res.status(200).json({
      success: true,
      data: {
        totalAttendees,
        avgBookmarkedSessionsPerAttendee: avgBookmarks[0]?.avg || 0,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/analytics/session-popularity
exports.getSessionPopularity = async (req, res) => {
  try {
    const sessions = await Session.aggregate([
      { $project: { title: 1, bookmarkCount: { $size: "$bookmarkedBy" } } },
      { $sort: { bookmarkCount: -1 } },
    ]);
    res.status(200).json({ success: true, data: sessions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

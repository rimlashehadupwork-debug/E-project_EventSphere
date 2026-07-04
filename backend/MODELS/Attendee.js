const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expo" }],
    bookmarkedSessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendee", attendeeSchema);

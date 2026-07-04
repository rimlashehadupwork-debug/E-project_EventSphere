const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    expoId: { type: mongoose.Schema.Types.ObjectId, ref: "Expo", required: true },
    title: { type: String, required: true },
    description: { type: String },
    speaker: { type: String },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    venue: { type: String },
    bookmarkedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendee" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);

const express = require("express");
const router = express.Router();
const {
  getExpoAnalytics,
  getBoothTraffic,
  getAttendeeEngagement,
  getSessionPopularity,
} = require("../controllers/analyticsController");

router.get("/expo/:id", getExpoAnalytics);
router.get("/booth-traffic", getBoothTraffic);
router.get("/attendee-engagement", getAttendeeEngagement);
router.get("/session-popularity", getSessionPopularity);

module.exports = router;

const Session = require("../models/Session");

// GET /api/search/sessions?keyword=xyz
exports.searchSessions = async (req, res) => {
  try {
    const { keyword } = req.query;
    const query = keyword
      ? {
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { speaker: { $regex: keyword, $options: "i" } },
          ],
        }
      : {};
    const sessions = await Session.find(query);
    res.status(200).json({ success: true, data: sessions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

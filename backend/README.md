# Person 2 — Backend APIs (24 total)

Ye folder tumhare 24 APIs ka mukammal Express + Mongoose code hai.

## Folder Structure
```
person2-apis/
├── models/
│   ├── Session.js
│   ├── Attendee.js
│   ├── Message.js
│   ├── Feedback.js
│   └── Notification.js
├── controllers/
│   ├── sessionController.js
│   ├── attendeeController.js
│   ├── messageController.js
│   ├── analyticsController.js
│   ├── feedbackController.js
│   ├── notificationController.js
│   └── searchController.js
└── routes/
    ├── sessionRoutes.js       (6 APIs)
    ├── attendeeRoutes.js      (5 APIs)
    ├── messageRoutes.js       (4 APIs)
    ├── analyticsRoutes.js     (4 APIs)
    ├── feedbackRoutes.js      (2 APIs)
    ├── notificationRoutes.js  (2 APIs)
    └── searchRoutes.js        (1 API)
```
Total = 6+5+4+4+2+2+1 = **24 APIs** ✅

## Kaise use karna hai (Step by Step)

### 1. Files copy karo
`models/`, `controllers/`, `routes/` — ye teenon folders apne project ke `backend/` (ya `server/`) folder mein copy kar do, jahan Person 1 ka code bhi hai.

### 2. Dependencies install karo (agar already nahi hain)
```bash
npm install express mongoose dotenv cors
```

### 3. Apni main `server.js` / `app.js` mein routes mount karo
```js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(require("cors")());

// ---- Person 1 ke routes (already hongi) ----
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/expos", require("./routes/expoRoutes"));
// app.use("/api/exhibitors", require("./routes/exhibitorRoutes"));
// app.use("/api/booths", require("./routes/boothRoutes"));

// ---- Person 2 ke routes (ye add karo) ----
app.use("/api/sessions", require("./routes/sessionRoutes"));
app.use("/api/attendees", require("./routes/attendeeRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/search", require("./routes/searchRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 4. `.env` file banao
```
MONGO_URI=mongodb://localhost:27017/eventsphere
PORT=5000
```

### 5. Test karo (Postman/Thunder Client se)
- `POST http://localhost:5000/api/sessions` — body: `{ "expoId": "...", "title": "AI Workshop", "startTime": "...", "endTime": "..." }`
- `GET http://localhost:5000/api/attendees/:id`
- `POST http://localhost:5000/api/messages` — body: `{ "senderId": "...", "receiverId": "...", "text": "Hello" }`
- `GET http://localhost:5000/api/analytics/session-popularity`
- `POST http://localhost:5000/api/feedback`
- `GET http://localhost:5000/api/search/sessions?keyword=AI`

## Important Notes
1. **Analytics module** ka `getExpoAnalytics` aur `getBoothTraffic` Person 1 ke `Booth` model par depend karta hai. Jab Person 1 apna `Booth.js` model bana kar mongoose mein register kar de, ye automatically kaam karega — koi extra code nahi likhna.
2. Saare responses ek consistent format follow karte hain: `{ success: true/false, data/message }` — frontend (React) integration easy rahegi.
3. Agar `Attendee`, `User` waghera models Person 1 alag naming se bana raha hai, to sirf `ref:` field ka naam match karwa lena models mein (e.g. `ref: "User"`).
4. Error handling har controller mein try/catch se already lagi hui hai.

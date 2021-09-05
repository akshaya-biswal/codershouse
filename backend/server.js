require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const DbConnect = require("./database");
const cors = require("cors");

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 5000;
DbConnect();
app.use(express.json({ limit: "8mb" }));
app.use(router);

app.get("/", (req, res) => {
  res.json({ message: "hello from expressJS" });
});

app.listen(PORT, () => `Listening on port ${PORT}`);

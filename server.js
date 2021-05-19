const express = require("express");
const mongo = require("mongoose");

const app = express();

const items = require("./routes/api/items");

// body parser middleware
app.use(express.json());

// DB config
const db = require("./config/keys", { useUnifiedTopology: true }).mongoUri;

// connect to mongodb
mongo
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// use routes
app.use("/api/items", items); // links all routes to items.js file in routes/api

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server active on port : ", PORT));

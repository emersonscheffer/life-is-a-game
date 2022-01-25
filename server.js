const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const config = require("config");

// const items = require("./routes/api/items");
// const profile = require("./routes/api/profile");
// const games = require("./routes/api/games");
// const user = require("./routes/api/users");
// const auth = require("./routes/api/auth");
// const league = require("./routes/api/leagues");
// const gamesleague = require("./routes/api/gamesleague");
// const record = require("./routes/api/record");

const app = express();

app.use(express.json());

//const key = process.env.API_KEY
//const db = config.get('mongoURI');
const db = "mongodb://localhost:27017/lifeisagame";

//connect
mongoose
  .connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

// app.use("/api/profile", profile);
// app.use("/api/items", items);
// app.use("/api/games", games);
// app.use("/api/users", user);
// app.use("/api/auth", auth);
// app.use("/api/leagues", league);
// app.use("/api/gamesleague", gamesleague);
// app.use("/api/record", record);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

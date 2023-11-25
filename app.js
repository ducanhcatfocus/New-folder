const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const connectDatabase = require("./database/connectDB");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/publics", express.static(path.join(__dirname, "publics")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/home", require("./routes/home"));

app.use((req, res) => {
  res.redirect("/home");
});
connectDatabase();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

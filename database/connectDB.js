const mongoose = require("mongoose");

const connectDatabase = () => {
  // const mongoDbUrl = "mongodb://localhost:27017";
  const mongoDbUrl = `mongodb+srv://ducanh:qweewq1234@cluster0.tc1tlpu.mongodb.net/CodeDictionary?retryWrites=true&w=majority`;

  console.log(`Connecting to ${mongoDbUrl}`);
  mongoose.Promise = global.Promise;
  // Connecting to the database
  mongoose
    .connect(mongoDbUrl)
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n${err}`);
      process.exit();
    });
};

module.exports = connectDatabase;

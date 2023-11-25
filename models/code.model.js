const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
  titleProblem: { type: String },
  codeContent: {
    type: String,
  },
  description: {
    type: String,
  },
  poster: {
    type: String,
  },
  type: {
    type: String,
    enum: [
      "UI",
      "Movement",
      "Other",
      "Ad",
      "Design Pattern",
      "Performance",
      "General",
    ],
    default: "General",
  },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("code", CodeSchema);

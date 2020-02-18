const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  results: [
    {
      q1: { type: String },
      q2: { type: String },
      q3: { type: String },
      q4: { type: String },
      q5: { type: String },
      q6: { type: String },
      q7: { type: String },
      q8: { type: String },
      q9: { type: String },
      q10: { type: String }
    }
  ]
});

module.exports = Answers = mongoose.model("answers", AnswerSchema);

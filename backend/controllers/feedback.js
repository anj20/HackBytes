const FeedbackSchema = require("../models/FeedbackModel");

exports.addFeedback = async (req, res) => {
  const { name, email, message } = req.body;
  const feedback = FeedbackSchema({ name, email, message });

  try {
    //validations
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    await feedback.save();
    res.status(200).json({ message: "Feedback Provided" });
  } catch (error) {
    console.error("Error while providing feedback:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await FeedbackSchema.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

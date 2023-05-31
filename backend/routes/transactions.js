const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");
const { addFeedback, getFeedbacks } = require("../controllers/feedback");
const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense)
  .post("/add-feedback", addFeedback)
  .get("/get-feedbacks", getFeedbacks);

module.exports = router;

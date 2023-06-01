import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import IncomeItem from "../Income/IncomeItem";
import ExpenseForm from "./ExpenseForm";
import axios from "axios";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const { getExpenses, deleteExpense, totalExpenses } = {
    getExpenses: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}get-expenses`
      );
      setExpenses(response.data);
      console.log(response.data);
    },

    deleteExpense: async (id) => {
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}delete-expense/${id}`
      );
      getExpenses();
    },
    totalExpenses: () => {
      let totalIncome = 0;
      expenses.forEach((income) => {
        totalIncome = totalIncome + income.amount;
      });

      return totalIncome;
    },
  };

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <p className="total-income">
          Total Expense: <span>${totalExpenses()}</span>
        </p>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              console.log({ income });
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="red"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #915f6d;
    font-weight: 700;
  }
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffdead;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import { useGlobalContext } from '../context/globalContext';
import axios from "axios";
import { useEffect } from "react";
const BASE_URL = "http://localhost:5001/api/v1/";

function History() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const { transactionHistory } = {
    transactionHistory: () => {
      const history = [...incomes, ...expenses];
      history.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return history.slice(0, 3);
    },
  };
  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
  };
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "expense" ? "red" : "green",
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === "expense" ? "red" : "green",
              }}
            >
              {type === "expense"
                ? `-$ ${amount <= 0 ? 0 : amount}`
                : `+$ ${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #faf9f6;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;

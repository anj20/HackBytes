import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { GlobalProvider } from "../../Context/GlobalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem";
import axios from "axios";
const BASE_URL = "http://localhost:5001/api/v1/";

function Income() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  // const { incomes, getIncomes, deleteIncome, totalIncome } =  GlobalProvider;
  // console.log({ GlobalProvider });
  const { getIncomes, deleteIncome, totalIncome } = {
    getIncomes: async () => {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      setIncomes(response.data);
      console.log(response.data);
    },
    deleteIncome: async (id) => {
      const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
      getIncomes();
    },
    totalIncome: () => {
      let totalIncome = 0;
      incomes.forEach((income) => {
        totalIncome = totalIncome + income.amount;
      });
      return totalIncome;
    },
  };
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled className=" w-3/4">
      <InnerLayout>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
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
      color: var(--color-green);
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

export default Income;

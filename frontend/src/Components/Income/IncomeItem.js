import React from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import { IoLogoBitcoin as bitcoin } from "react-icons/io";
import {
  AiOutlineBook as book,
  AiOutlineCalendar as calender,
  AiOutlineCreditCard as card,
  AiFillCheckCircle as circle,
} from "react-icons/ai";
import { GiClothes as clothing } from "react-icons/gi";
import {
  BiDollar as dollar,
  BiCommentDetail as comment,
  BiDollar,
  BiComment,
  BiCommentDetail,
} from "react-icons/bi";
import { MdFoodBank as food } from "react-icons/md";

import { SiFreelancer as freelance } from "react-icons/si";
import { MdOutlineMedicalServices as medical } from "react-icons/md";
import { FaMoneyBillAlt as money } from "react-icons/fa";
import { GiPiggyBank as piggy } from "react-icons/gi";
import { IoMdTrendingUp as stocks } from "react-icons/io";
import { RiTakeawayLine as takeaway } from "react-icons/ri";
import { FaTrash as trash } from "react-icons/fa";
import { MdTv as tv } from "react-icons/md";
import { FaUsers as users } from "react-icons/fa";
import { FaYoutube as yt } from "react-icons/fa";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return { yt };
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };
  return (
    <IncomeItemStyled indicator={indicatorColor}>
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              <BiDollar /> {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              <BiCommentDetail />
              {description}
            </p>
          </div>
          <div className="btn-con">
            <button className="btn btn-primary" onClick={() => deleteItem(id)}>
              {trash}
            </button>
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background: #fffff0;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }
    }
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: green;
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem;

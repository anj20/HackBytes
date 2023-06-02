import React from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";

import {
  AiOutlineCalendar,
  AiOutlineBook,
  AiOutlineCreditCard,
  AiFillCheckCircle,
} from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { BiDollar, BiCommentDetail } from "react-icons/bi";
import { MdFoodBank, MdOutlineMedicalServices, MdTv } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { RiTakeawayLine } from "react-icons/ri";
import { GiPiggyBank } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";
import { FaMoneyBillAlt, FaTrash, FaYoutube } from "react-icons/fa";

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
        return <AiOutlineCalendar className="icon" />;
      case "freelancing":
        return <AiOutlineBook className="icon" />;
      case "investments":
        return <AiOutlineCreditCard className="icon" />;
      case "stocks":
        return <IoMdTrendingUp className="icon" />;
      case "bitcoin":
        return <FaMoneyBillAlt className="icon" />;
      case "bank":
        return <AiOutlineCreditCard className="icon" />;
      case "youtube":
        return <FaYoutube className="icon" />;
      case "other":
        return <GiPiggyBank className="icon" />;
      default:
        return <AiOutlineCalendar className="icon" />;
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return <AiOutlineBook className="icon" />;
      case "groceries":
        return <MdFoodBank className="icon" />;
      case "health":
        return <MdOutlineMedicalServices className="icon" />;
      case "subscriptions":
        return <MdTv className="icon" />;
      case "takeaways":
        return <RiTakeawayLine className="icon" />;
      case "clothing":
        return <GiClothes className="icon" />;
      case "travelling":
        return <SiFreelancer className="icon" />;
      case "other":
        return <AiFillCheckCircle className="icon" />;
      default:
        return <AiOutlineCalendar className="icon" />;
    }
  };

  return (
    <IncomeItemStyled indicator={indicatorColor}>
      {type === "expense" ? expenseCatIcon() : categoryIcon()}
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              <BiDollar /> {amount}
            </p>
            <p>
              <AiOutlineCalendar /> {dateFormat(date)}
            </p>
            <p>
              <BiCommentDetail />
              {description.length > 20
                ? description.slice(0, 20) + "..."
                : description}
            </p>
          </div>
          <div className="btn-con">
            <button className="btn btn-primary" onClick={() => deleteItem(id)}>
              <FaTrash />
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
    background: #98fb98;
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

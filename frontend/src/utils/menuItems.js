import { LuLayoutDashboard as dashboard } from "react-icons/lu";
import { IoMdTrendingUp as expenses } from "react-icons/io";
import { GrTransaction as transactions } from "react-icons/gr";
import { TiArrowRepeat as trend } from "react-icons/ti";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
];

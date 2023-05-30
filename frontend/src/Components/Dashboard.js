import React from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Income from "./Income";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      {/* <Income /> */}
      <RightSidebar />
    </div>
  );
};

export default Dashboard;

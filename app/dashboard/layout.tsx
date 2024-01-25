import React, { ReactNode } from "react";

interface LayoutDashboardProps {
  children: ReactNode;
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default LayoutDashboard;
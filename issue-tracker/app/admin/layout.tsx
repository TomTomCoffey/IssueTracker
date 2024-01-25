import React from "react";

interface Props {
  children: React.ReactNode;
}

const adminlayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-r m-5">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default adminlayout;

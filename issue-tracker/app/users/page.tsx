import Link from "next/link";
import React, { use } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const Userpage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default Userpage;

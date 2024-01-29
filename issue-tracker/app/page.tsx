import Link from "next/link";
import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      Hello {session && <span>{session.user!.name}</span>}
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
};

export default page;

import Link from "next/link";
import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";

const page = () => {
  return (
    <div>
      Hello World!
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
};

export default page;

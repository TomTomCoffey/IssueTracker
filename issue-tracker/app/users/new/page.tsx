"use client";
import React from "react";
import Router, { useRouter } from "next/navigation";

const newUsers = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default newUsers;

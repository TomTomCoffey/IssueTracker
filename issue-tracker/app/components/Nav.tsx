"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-100 p-3 space-x-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "loading" && (
        <div>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-xs"></span>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      {status === "authenticated" && <div>{session.user!.name} </div>}
    </div>
  );
};

export default Nav;

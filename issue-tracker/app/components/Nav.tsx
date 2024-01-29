import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex bg-slate-100 p-3 space-x-3">
      <Link href="/" className="mr-5">
        {" "}
        Home{" "}
      </Link>
      <Link href="/users" className="mr-5">
        {" "}
        Users{" "}
      </Link>
      <Link href="/api/auth/signin" className="mr-5">
        Login
      </Link>
    </div>
  );
};

export default Nav;

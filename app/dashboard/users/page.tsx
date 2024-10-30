import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <h1>Dashboar users</h1>;
      <ul>
        <li className="mt-10">
          <Link href="/dashboard/users/1">user 1</Link>
        </li>
        <li className="mt-10">
          <Link href="/dashboard/users/2">user 2</Link>
        </li>
        <li className="mt-10">
          <Link href="/dashboard/users/3">user 3</Link>
        </li>
        <li className="mt-10">
          <Link href="/dashboard/users/4">user 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;

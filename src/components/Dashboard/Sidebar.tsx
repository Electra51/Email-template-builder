"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menu = [
  { name: "Overview", path: "/dashboard" },
  { name: "Email-Template-Builder", path: "/dashboard/posts" },
  { name: "Users", path: "/dashboard/users" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-[#4a7887] text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-3 py-2 rounded-md ${
                pathname === item.path
                  ? "bg-white text-[#4a7887] font-semibold"
                  : "hover:bg-[#ffffff22]"
              }`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

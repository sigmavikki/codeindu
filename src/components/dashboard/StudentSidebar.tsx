"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaHome,
  FaBook,
  FaUser,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/dashboard-students/", icon: <FaHome /> },
  {
    name: "My Courses",
    path: "/dashboard-students/my-course",
    icon: <FaBook />,
  },

  {
    name: "Doubts",
    path: "/dashboard-students/doubts",
    icon: <FaQuestionCircle />,
  },
  { name: "Profile", path: "/dashboard-students/profile", icon: <FaUser /> },
  { name: "Settings", path: "/dashboard-students/settings", icon: <FaCog /> },
];

export default function StudentSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`bg-[#111] text-white w-64 p-4 mt-16 transition-all ${
        open ? "block" : "hidden"
      } md:block`}
    >
      <button
        className="md:hidden mb-4 text-sm text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide" : "Show"} Menu
      </button>
      <nav className="space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              pathname === link.path ? "bg-[#333]" : "hover:bg-[#222]"
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

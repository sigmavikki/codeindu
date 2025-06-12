"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

const links = [
  { href: "/admin-dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { href: "/admin-dashboard/accounts", label: "Accounts", icon: <FaUsers /> },
  { href: "/admin-dashboard/settings", label: "Settings", icon: <FaCog /> },
];

export default function AdminSidebarPage() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col min-h-screen">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition-colors ${
              pathname === href ? "bg-gray-800" : ""
            }`}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 p-2 w-full hover:bg-gray-800 rounded transition-colors">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

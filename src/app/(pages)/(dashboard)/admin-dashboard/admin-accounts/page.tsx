"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Employee" | "Client" | "Student";
  status: "Active" | "Suspended" | "Pending";
};

const dummyUsers: User[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Client",
    status: "Pending",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@example.com",
    role: "Employee",
    status: "Active",
  },
  {
    id: 4,
    name: "Lina Khan",
    email: "lina@example.com",
    role: "Student",
    status: "Suspended",
  },
  {
    id: 5,
    name: "David Lee",
    email: "david@example.com",
    role: "Client",
    status: "Active",
  },
];

export default function AdminAccountsPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filteredUsers = dummyUsers.filter((user) => {
    return (
      (roleFilter === "All" || user.role === roleFilter) &&
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Accounts</h1>
      <p className="mb-6 text-gray-500">
        Manage user accounts, roles, and access levels.
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Client">Client</option>
          <option value="Student">Student</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

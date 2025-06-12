"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "ITPro Solutions",
    emailNotifications: true,
    enableMaintenanceMode: false,
    maxUsers: 5000,
    theme: "light",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, checked, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Settings saved!");
    // You could POST to an API here
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded shadow text-black"
      >
        {/* Site Name */}
        <div>
          <label className="block mb-1 font-medium">Site Name</label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email Notifications */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label className="font-medium">Enable Email Notifications</label>
        </div>

        {/* Maintenance Mode */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="enableMaintenanceMode"
            checked={settings.enableMaintenanceMode}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label className="font-medium">Maintenance Mode</label>
        </div>

        {/* Max Users */}
        <div>
          <label className="block mb-1 font-medium">Maximum Users</label>
          <input
            type="number"
            name="maxUsers"
            value={settings.maxUsers}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Theme Selection */}
        <div>
          <label className="block mb-1 font-medium">Theme</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

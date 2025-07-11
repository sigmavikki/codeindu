"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
    language: "English",
    privacy: {
      tracking: false,
      dataSharing: false,
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target as
      | HTMLInputElement
      | HTMLSelectElement;
    const checked = (event.target as HTMLInputElement).checked;

    if (name === "tracking" || name === "dataSharing") {
      setSettings((prevSettings) => ({
        ...prevSettings,
        privacy: {
          ...prevSettings.privacy,
          [name]: checked,
        },
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  return (
    <div
      className={`p-4 ${
        settings.theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
      <form className="space-y-4">
        {/* Theme Setting */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="theme">
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Notifications Setting */}
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="notifications"
          >
            Enable Notifications
          </label>
          <input
            id="notifications"
            name="notifications"
            type="checkbox"
            checked={settings.notifications}
            onChange={handleChange}
            className="ml-2"
          />
        </div>

        {/* Language Setting */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="language">
            Language
          </label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        {/* Privacy Settings */}
        <div>
          <h2 className="text-xl font-semibold mt-6">🔒 Privacy Settings</h2>
          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="tracking"
            >
              Enable Tracking
            </label>
            <input
              id="tracking"
              name="tracking"
              type="checkbox"
              checked={settings.privacy.tracking}
              onChange={handleChange}
              className="ml-2"
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="dataSharing"
            >
              Enable Data Sharing
            </label>
            <input
              id="dataSharing"
              name="dataSharing"
              type="checkbox"
              checked={settings.privacy.dataSharing}
              onChange={handleChange}
              className="ml-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

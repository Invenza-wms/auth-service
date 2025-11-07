import UserProfile from "../components/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";

type UserSettings = {
  username: string;
  role: string;
  language: string;
  currentPassword: string;
  newPassword: string;
};

const UserSettings = () => {
  const [settings, setSettings] = useState<UserSettings>({
    username: "",
    role: "",
    language: "",
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get<UserSettings>("/api/user/settings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setSettings((prev) => ({ ...prev, ...res.data })))
      .catch(() => alert("Failed to load user settings"));
  }, []);

  const handleUpdate = () => {
    axios
      .post("/api/user/settings/update", settings)
      .then(() => alert("Settings updated"))
      .catch(() => alert("Invalid current password"));
  };

  return (
    <div className="min-h-screen bg-invenza-mainAccent">
      <UserProfile />
      <main className="pt-16 p-8 max-w-xl mx-auto bg-white rounded shadow">
        <h1 className="text-2xl font-semibold mb-6 text-invenza-heading">User Settings</h1>

        {/* Username (read-only) */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Username</label>
          <input
            type="text"
            value={settings.username}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Role (read-only) */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Role</label>
          <input
            type="text"
            value={settings.role}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Language (editable) */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Language</label>
          <select
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>

        {/* Password fields */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Current Password</label>
          <input
            type="password"
            value={settings.currentPassword}
            onChange={(e) => setSettings({ ...settings, currentPassword: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">New Password</label>
          <input
            type="password"
            value={settings.newPassword}
            onChange={(e) => setSettings({ ...settings, newPassword: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="bg-invenza-success text-white px-4 py-2 rounded hover:bg-invenza-mainAccent"
        >
          Update Settings
        </button>
      </main>
    </div>
  );
};

export default UserSettings;
import UserProfile from "../components/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";

type UserSettings = {
  username: string;
  role: string;
  language: string;
};

const UserDashboard = () => {
  const [user, setUser] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
     console.log("JWT token:", token);
    axios
      .get<UserSettings>("/api/user/settings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => setError("Unable to load user profile"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-invenza-mainAccent">
      <UserProfile />
      <main className="pt-16 p-8 max-w-xl mx-auto bg-white rounded shadow">
        <h1 className="text-2xl font-semibold mb-6 text-invenza-heading">User Profile</h1>

        {loading ? (
          <p>Loading profile...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : user ? (
          <div className="space-y-4">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Language:</strong> {user.language}</p>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default UserDashboard;
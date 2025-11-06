import React, { useState } from "react";

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showAdd, setShowAdd] = useState(false);

  const addUser = (user: Omit<any, "id">) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now() }]);
    setShowAdd(false);
  };

  const deleteSelected = () => {
    setUsers((prev) => prev.filter((p) => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <img src="Invenza.png" alt="logo" className="h-12" />
          <h1 className="text-xl font-semibold">Invenza Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <input placeholder="Search" className="p-2 border rounded" />
          <button onClick={() => setShowAdd(true)} className="px-4 py-2 rounded text-white" style={{ background: "#2c4166" }}>
            Add User
          </button>
          <button onClick={deleteSelected} className="px-4 py-2 rounded text-white" style={{ background: "#2c4166" }}>
            Delete User
          </button>
          <button onClick={onLogout} className="px-3 py-2 border rounded text-white" style={{ background: "#2c4166" }}>
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left">
              <th></th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(u.id)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedIds((s) => [...s, u.id]);
                      else setSelectedIds((s) => s.filter((id) => id !== u.id));
                    }}
                  />
                </td>
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">
                  <select
                    value={u.role}
                    onChange={(e) => {
                      const val = e.target.value;
                      setUsers((prev) => prev.map((p) => (p.id === u.id ? { ...p, role: val } : p)));
                    }}
                    className="p-2 border rounded"
                  >
                    <option>Product manager</option>
                    <option>Picker</option>
                    <option>Packer</option>
                    <option>Stocker</option>
                    <option>Loader/Unloader</option>
                  </select>
                </td>
                <td className="p-2">
                  <select
                    value={u.status}
                    onChange={(e) => {
                      const val = e.target.value;
                      setUsers((prev) => prev.map((p) => (p.id === u.id ? { ...p, status: val } : p)));
                    }}
                    className="p-2 border rounded"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {showAdd && <AddUserModal onClose={() => setShowAdd(false)} onAdd={addUser} />}
    </div>
  );
}

function AddUserModal({ onClose, onAdd }: { onClose: () => void; onAdd: (u: Omit<any, "id">) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Product manager");
  const [status, setStatus] = useState("Active");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Add User</h3>
        <div className="space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <select className="w-full p-2 border rounded" value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Product manager</option>
            <option>Picker</option>
            <option>Packer</option>
            <option>Stocker</option>
            <option>Loader/Unloader</option>
          </select>
          <select className="w-full p-2 border rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <div className="flex gap-3 mt-4">
            <button onClick={() => onAdd({ name, email, role, status })} className="flex-1 py-2 rounded text-white" style={{ background: "#2c4166" }}>
              Add
            </button>
            <button onClick={onClose} className="flex-1 py-2 rounded border">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

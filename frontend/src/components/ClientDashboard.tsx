import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://myrepo-bh50.onrender.com"; // Update if your backend URL changes

type Client = {
  id: string;
  name: string;
  email: string;
  address: string;
  age: number;
  gender: string;
  contact: string;
  firstVisit: string;
  lastVisit: string;
};

export default function ClientDashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditingClient] = useState<Partial<Client> | null>(null);
  const [formOpen, setFormOpen] = useState(false);

const fetchClients = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/clients`);
    const data = await res.json();

    // ✅ Handle non-array or error response safely
    if (Array.isArray(data)) {
      setClients(data);
    } else {
      console.error("Expected array, but got:", data);
      setClients([]); // fallback to avoid crash
    }
  } catch (err) {
    console.error("Error fetching clients:", err);
    setClients([]); // prevent crash on network error
  }
};


  const handleDelete = async (id: string) => {
    try {
      await fetch(`${BACKEND_URL}/api/clients/${id}`, { method: "DELETE" });
      fetchClients();
    } catch (err) {
      console.error("Error deleting client:", err);
    }
  };

  const handleSave = async () => {
    if (!editingClient) return;

    const clientToSave = {
      ...editingClient,
      age: Number(editingClient.age),
    };

    const method = editingClient.id ? "PUT" : "POST";
    const url = editingClient.id
      ? `${BACKEND_URL}/api/clients/${editingClient.id}`
      : `${BACKEND_URL}/api/clients`;

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientToSave),
      });

      setFormOpen(false);
      setEditingClient(null);
      fetchClients();
    } catch (err) {
      console.error("Error saving client:", err);
    }
  };

  const openForm = (client?: Client) => {
    setEditingClient(client || {});
    setFormOpen(true);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <button
        onClick={() => openForm()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add New Client
      </button>
      <div className="overflow-auto">
        <table className="w-full border text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>First Visit</th>
              <th>Last Visit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-t">
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>{client.age}</td>
                <td>{client.gender}</td>
                <td>{client.contact}</td>
                <td>{client.firstVisit}</td>
                <td>{client.lastVisit}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => openForm(client)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded w-full max-w-lg space-y-4">
            <h2 className="text-lg font-semibold">
              {editingClient?.id ? "Edit Client" : "Add Client"}
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={editingClient?.name || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, name: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={editingClient?.email || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, email: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Address"
              value={editingClient?.address || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, address: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Age"
              value={editingClient?.age || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, age: Number(e.target.value) }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Gender"
              value={editingClient?.gender || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, gender: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Contact"
              value={editingClient?.contact || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, contact: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="date"
              value={editingClient?.firstVisit || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, firstVisit: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="date"
              value={editingClient?.lastVisit || ""}
              onChange={(e) =>
                setEditingClient((prev) => ({ ...prev!, lastVisit: e.target.value }))
              }
              className="w-full border px-3 py-2 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setFormOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

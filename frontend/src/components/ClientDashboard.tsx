import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { motion, AnimatePresence } from "framer-motion";

type Patient = {
  id: number;
  name: string;
  birthday: string;
  address: string;
  age: number;
  gender: string;
  contactNumber: string;
  dateToday: string;
};

const baseUrl = "https://patient-backend-0wa6.onrender.com/api/patients";
const perPage = 20;

export default function PatientDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState({ username: "", password: "" });
  const [patients, setPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof Patient>("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [form, setForm] = useState<Omit<Patient, "id">>({
    name: "",
    birthday: "",
    address: "",
    age: 0,
    gender: "",
    contactNumber: "",
    dateToday: new Date().toISOString().slice(0, 10),
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPatients = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setPatients(data.patients || data);
  };

  useEffect(() => {
    if (isLoggedIn) fetchPatients();
  }, [isLoggedIn]);

  const filtered = patients
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const aVal = a[sortBy]?.toString().toLowerCase() ?? "";
      const bVal = b[sortBy]?.toString().toLowerCase() ?? "";
      return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  const paged = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.username === "admin" && auth.password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "age" ? +value : value }));
  };

  const handleSubmit = async () => {
    const url = editingId ? `${baseUrl}/${editingId}` : baseUrl;
    const method = editingId ? "PUT" : "POST";
    setLoading(true);
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setShowForm(false);
    setEditingId(null);
    fetchPatients();
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
    setConfirmDeleteId(null);
    fetchPatients();
    setLoading(false);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(patients);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Patients");
    const blob = new Blob([XLSX.write(workbook, { bookType: "xlsx", type: "array" })]);
    saveAs(blob, "patients.xlsx");
  };

  const toggleSelectAll = () => {
    const currentIds = paged.map((p) => p.id);
    const allSelected = currentIds.every((id) => selectedIds.includes(id));
    if (allSelected) {
      setSelectedIds((prev) => prev.filter((id) => !currentIds.includes(id)));
    } else {
      setSelectedIds((prev) => [...new Set([...prev, ...currentIds])]);
    }
  };

  const handleMultiDelete = async () => {
    setLoading(true);
    await Promise.all(
      selectedIds.map((id) => fetch(`${baseUrl}/${id}`, { method: "DELETE" }))
    );
    setSelectedIds([]);
    fetchPatients();
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto mt-20 bg-white rounded shadow space-y-4">
        <h2 className="text-xl font-bold">Admin Login</h2>
        <input
          className="w-full border p-2"
          placeholder="Username"
          value={auth.username}
          onChange={(e) => setAuth({ ...auth, username: e.target.value })}
        />
        <input
          className="w-full border p-2"
          placeholder="Password"
          type="password"
          value={auth.password}
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">Login</button>
      </form>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-4 py-2 rounded">Add New Patient</button>
        <button onClick={exportToExcel} className="bg-yellow-500 text-white px-4 py-2 rounded">Export to Excel</button>
      </div>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full border p-2 mt-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th><input type="checkbox" onChange={toggleSelectAll} checked={paged.every(p => selectedIds.includes(p.id))} /></th>
              {["name", "birthday", "address", "age", "gender", "contactNumber", "dateToday"].map((key) => (
                <th key={key} className="cursor-pointer" onClick={() => {
                  setSortBy(key as keyof Patient);
                  setSortDir(sortDir === "asc" ? "desc" : "asc");
                }}>{key}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((p) => (
              <tr key={p.id} className="border-t">
                <td><input type="checkbox" checked={selectedIds.includes(p.id)} onChange={() =>
                  setSelectedIds(prev => prev.includes(p.id) ? prev.filter(id => id !== p.id) : [...prev, p.id])
                } /></td>
                <td>{p.name}</td>
                <td>{p.birthday}</td>
                <td>{p.address}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.contactNumber}</td>
                <td>{p.dateToday}</td>
                <td className="space-x-2">
                  <button onClick={() => {
                    setForm(p);
                    setEditingId(p.id);
                    setShowForm(true);
                  }} className="text-blue-600">Edit</button>
                  <button onClick={() => setConfirmDeleteId(p.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="px-4 py-1 bg-gray-200 rounded">Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="px-4 py-1 bg-gray-200 rounded">Next</button>
      </div>

      {/* Multi Delete */}
      {selectedIds.length > 0 && (
        <button onClick={handleMultiDelete} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Delete Selected</button>
      )}

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-white p-6 rounded shadow space-y-4 w-full max-w-md">
              <h2 className="text-xl font-bold">{editingId ? "Edit" : "Add"} Patient</h2>
              <input className="w-full border p-2" placeholder="Name" name="name" value={form.name} onChange={handleInput} />
              <input className="w-full border p-2" placeholder="Birthday" name="birthday" type="date" value={form.birthday} onChange={handleInput} />
              <input className="w-full border p-2" placeholder="Address" name="address" value={form.address} onChange={handleInput} />
              <input className="w-full border p-2" placeholder="Age" name="age" type="number" value={form.age} onChange={handleInput} />
              <select className="w-full border p-2" name="gender" value={form.gender} onChange={handleInput}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input className="w-full border p-2" placeholder="Contact Number" name="contactNumber" value={form.contactNumber} onChange={handleInput} />
              <input className="w-full border p-2" placeholder="Date Today" name="dateToday" type="date" value={form.dateToday} onChange={handleInput} />
              <div className="flex justify-between">
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">{loading ? "Saving..." : "Save"}</button>
                <button onClick={() => setShowForm(false)} className="text-gray-500">Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation */}
      <AnimatePresence>
        {confirmDeleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-white p-6 rounded shadow space-y-4">
              <p>Are you sure you want to delete this patient?</p>
              <div className="flex justify-between">
                <button onClick={() => handleDelete(confirmDeleteId)} className="bg-red-500 text-white px-4 py-2 rounded">Yes, Delete</button>
                <button onClick={() => setConfirmDeleteId(null)} className="text-gray-500">Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

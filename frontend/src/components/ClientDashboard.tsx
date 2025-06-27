import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

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
    dateToday: new Date().toISOString().slice(0, 10)
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const fetchPatients = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setPatients(data.patients || data);
  };

  useEffect(() => {
    if (isLoggedIn) fetchPatients();
  }, [isLoggedIn]);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    const aVal = a[sortBy]?.toString().toLowerCase() ?? "";
    const bVal = b[sortBy]?.toString().toLowerCase() ?? "";
    return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const paged = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.username === "admin" && auth.password === "1234") setIsLoggedIn(true);
    else alert("Invalid credentials");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === "age" ? +value : value }));
  };

  const handleSubmit = async () => {
    const url = editingId ? `${baseUrl}/${editingId}` : baseUrl;
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setForm({
        name: "",
        birthday: "",
        address: "",
        age: 0,
        gender: "",
        contactNumber: "",
        dateToday: new Date().toISOString().slice(0, 10)
      });
      setEditingId(null);
      setShowForm(false);
      fetchPatients();
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
    fetchPatients();
  };

  const handleMultiDelete = async () => {
    await Promise.all(selectedIds.map(id => fetch(`${baseUrl}/${id}`, { method: "DELETE" })));
    setSelectedIds([]);
    fetchPatients();
  };

  const toggleSort = (field: keyof Patient) => {
    if (sortBy === field) setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
    else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(patients);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Patients");
    const blob = new Blob([XLSX.write(workbook, { bookType: "xlsx", type: "array" })]);
    saveAs(blob, "patients.xlsx");
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-xs space-y-4">
          <h2 className="text-xl font-bold text-center">Admin Login</h2>
          <input
            name="username"
            placeholder="Username"
            value={auth.username}
            onChange={(e) => setAuth({ ...auth, username: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto text-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h1 className="text-2xl font-bold">Patient Records</h1>
        <div className="flex gap-2">
          <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-3 py-1 rounded">Add New Patient</button>
          {selectedIds.length > 0 && (
            <button onClick={handleMultiDelete} className="bg-red-600 text-white px-3 py-1 rounded">Delete Selected</button>
          )}
          <button onClick={exportToExcel} className="bg-indigo-600 text-white px-3 py-1 rounded">Export to Excel</button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search patients..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="w-full md:w-1/2 border p-2 rounded mb-4"
      />

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2"></th>
              {["name", "birthday", "address", "age", "gender", "contactNumber", "dateToday"].map((col) => (
                <th
                  key={col}
                  onClick={() => toggleSort(col as keyof Patient)}
                  className="border p-2 cursor-pointer hover:bg-gray-200"
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)} {sortBy === col && (sortDir === "asc" ? "↑" : "↓")}
                </th>
              ))}
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(p.id)}
                    onChange={(e) =>
                      setSelectedIds(prev =>
                        e.target.checked ? [...prev, p.id] : prev.filter(id => id !== p.id)
                      )
                    }
                  />
                </td>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.birthday.slice(0, 10)}</td>
                <td className="border p-2">{p.address}</td>
                <td className="border p-2">{p.age}</td>
                <td className="border p-2">{p.gender}</td>
                <td className="border p-2">{p.contactNumber}</td>
                <td className="border p-2">{p.dateToday.slice(0, 10)}</td>
                <td className="border p-2 flex gap-2">
                  <button onClick={() => { setForm(p); setShowForm(true); setEditingId(p.id); }} className="text-blue-600">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded disabled:opacity-40">Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded disabled:opacity-40">Next</button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">{editingId ? "Edit Patient" : "Add New Patient"}</h2>
            {["name", "birthday", "address", "age", "gender", "contactNumber", "dateToday"].map(field => (
              <div key={field}>
                <label className="block text-sm capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                {field === "gender" ? (
                  <select name="gender" value={form.gender} onChange={handleInput} className="w-full border p-2 rounded">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                ) : (
                  <input
                    name={field}
                    type={field === "birthday" || field === "dateToday" ? "date" : field === "age" ? "number" : "text"}
                    value={form[field as keyof typeof form]}
                    onChange={handleInput}
                    className="w-full border p-2 rounded"
                  />
                )}
              </div>
            ))}
            <div className="flex justify-end gap-2">
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-3 py-1 rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

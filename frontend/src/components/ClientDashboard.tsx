import React, { useEffect, useState } from "react";

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

  const fetchPatients = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const sorted = [...(data.patients || data)].filter((p: Patient) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    ).sort((a: Patient, b: Patient) => {
      if (sortBy === "age") {
        return sortDir === "asc" ? a.age - b.age : b.age - a.age;
      }
      const aVal = a[sortBy]?.toString().toLowerCase() ?? "";
      const bVal = b[sortBy]?.toString().toLowerCase() ?? "";
      return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

    setPatients(sorted);
  };

  useEffect(() => {
    if (isLoggedIn) fetchPatients();
  }, [isLoggedIn, search, sortBy, sortDir]);

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
    setForm(prev => ({ ...prev, [name]: name === "age" ? +value : value }));
  };

  const handleSubmit = async () => {
    const res = await fetch(baseUrl, {
      method: "POST",
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
      setShowForm(false);
      fetchPatients();
    }
  };

  const toggleSort = (field: keyof Patient) => {
    if (sortBy === field) {
      setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleLogin} className="border p-6 rounded shadow-md w-80 space-y-4 bg-white">
          <h2 className="text-xl font-semibold text-center">Admin Login</h2>
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
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Patient Records</h1>

      <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-4 py-2 rounded">
        Add New Patient
      </button>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search patients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm border p-2 rounded"
        />
      </div>

      <table className="w-full border text-sm mt-6">
        <thead className="bg-gray-100">
          <tr>
            {["name", "birthday", "address", "age", "gender", "contactNumber", "dateToday"].map((col) => (
              <th
                key={col}
                onClick={() => toggleSort(col as keyof Patient)}
                className="border p-2 cursor-pointer hover:bg-gray-200"
              >
                {col.charAt(0).toUpperCase() + col.slice(1)} {sortBy === col && (sortDir === "asc" ? "↑" : "↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.birthday.slice(0, 10)}</td>
              <td className="border p-2">{p.address}</td>
              <td className="border p-2">{p.age}</td>
              <td className="border p-2">{p.gender}</td>
              <td className="border p-2">{p.contactNumber}</td>
              <td className="border p-2">{p.dateToday.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Add New Patient</h2>

            <div>
              <label className="block text-sm">Full Name</label>
              <input name="name" value={form.name} onChange={handleInput} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Birthday</label>
              <input type="date" name="birthday" value={form.birthday} onChange={handleInput} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Address</label>
              <input name="address" value={form.address} onChange={handleInput} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Age</label>
              <input name="age" type="number" value={form.age} onChange={handleInput} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Gender</label>
              <select name="gender" value={form.gender} onChange={handleInput} className="w-full border p-2 rounded">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm">Contact Number</label>
              <input name="contactNumber" value={form.contactNumber} onChange={handleInput} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Date Today</label>
              <input type="date" name="dateToday" value={form.dateToday} onChange={handleInput} className="w-full border p-2 rounded" />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setShowForm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";

function DangKy() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // kiểm tra trống
    if (!form.name || !form.email || !form.password) {
      setError("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setError("");
    setSubmittedData(form); // lưu dữ liệu đã nhập
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 5: Form Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={form.name}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <button type="submit">Đăng ký</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Mật khẩu: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default DangKy;

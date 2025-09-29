import React, { useState } from "react";

function DemKyTu() {
  const [text, setText] = useState("");
  const maxLength = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  const isOverLimit = charCount > maxLength;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h2> Bài 1: Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ padding: "5px", width: "250px" }}
      />
      <p style={{ color: isOverLimit ? "red" : "black" }}>
        Số ký tự: {charCount}
      </p>
      {isOverLimit && <p style={{ color: "red" }}>⚠️ Vượt quá 100 ký tự!</p>}
    </div>
  );
}

export default DemKyTu;

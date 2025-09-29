import React, { useState, useEffect } from "react";

function DenGiaoThong() {
  const colors = ["red", "green", "yellow"];
  const [activeIndex, setActiveIndex] = useState(0);

  // Hàm đổi đèn thủ công khi bấm nút
  const DoiDen = () => {
    setActiveIndex((prev) => (prev + 1) % colors.length);
  };

  // Tự động đổi đèn mỗi 2 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 2: Đèn giao thông</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {colors.map((color, index) => (
          <div
            key={color}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? color : "gray",
              margin: "0 auto",
            }}
          ></div>
        ))}
      </div>
      <button
        onClick={DoiDen}
        style={{ marginTop: "15px", padding: "5px 10px" }}
      >
        Chuyển đèn
      </button>
    </div>
  );
}

export default DenGiaoThong;

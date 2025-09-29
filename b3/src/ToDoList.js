import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return; // không thêm nếu rỗng
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 3: Danh sách công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ marginTop: "15px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {t}{" "}
            <button
              onClick={() => handleDelete(index)}
              style={{
                marginLeft: "10px",
                padding: "2px 5px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

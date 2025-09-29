import React from "react";

function SanPham({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

export default SanPham;

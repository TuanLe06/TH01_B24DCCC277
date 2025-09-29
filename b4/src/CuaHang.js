import React, { useState } from "react";
import SanPham from "./SanPham";

function CuaHang() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 4: Cửa hàng</h2>
      <h3>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </h3>

      {products.map((p) => (
        <SanPham key={p.id} product={p} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default CuaHang;

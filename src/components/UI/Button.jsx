import React from "react";

export default function Button({
  children,
  onClick,
  disabled = false,
  selected = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        margin: 4,
        padding: "6px 10px",
        border: "1px solid #ccc",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        background: selected ? "#333" : "#eee",
        color: selected ? "white" : "black",
        borderRadius: 6,
      }}
    >
      {children}
    </button>
  );
}
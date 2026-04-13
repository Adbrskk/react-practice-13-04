import React from "react";

export default function Chip({ label, onRemove }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 8px",
        margin: 4,
        background: "#ddd",
        borderRadius: 12,
      }}
    >
      <span>{label}</span>

      <button
        onClick={onRemove}
        style={{
          marginLeft: 6,
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
    </div>
  );
}
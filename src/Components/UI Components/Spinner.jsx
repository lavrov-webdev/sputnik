import React from "react";

export default function Spinner({ width = "2rem", height = "2rem", style = 'text-primary' }) {
  return (
    <div
      className={`spinner-border ${style}`}
      role="status"
      style={{ width, height }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

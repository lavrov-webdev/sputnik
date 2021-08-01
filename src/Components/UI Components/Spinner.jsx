import React from "react";

export default function Spinner({ width = "2rem", height = "2rem" }) {
  return (
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width, height }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

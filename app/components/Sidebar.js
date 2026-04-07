"use client";

export default function Sidebar({ setVideo }) {
  return (
    <div style={{ width: 200 }}>
      <h3>Navigation</h3>

      <button onClick={() => setVideo("overview.mp4")}>Dashboard</button>
      <button onClick={() => setVideo("inward.mp4")}>Inward</button>
      <button onClick={() => setVideo("outward.mp4")}>Outward</button>
    </div>
  );
}
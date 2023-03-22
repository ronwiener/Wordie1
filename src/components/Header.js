import React from "react";
import Buttons from "./Buttons";

export default function Header() {
  return (
    <div>
      <div style={{ fontSize: "2.5em", color: "white", marginTop: 0 }}>
        🅆 🄾{" "}
        <span
          style={{
            fontSize: "80px",
            backgroundColor: "#435057",
            color: "lightgreen",
          }}
        >
          🅁
        </span>{" "}
        🄳 🄸 🄴
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.70em",
            color: "white",
            marginTop: 0,
          }}
        >
          By Ron's Fun & Games
        </p>
      </div>
      <Buttons />
    </div>
  );
}

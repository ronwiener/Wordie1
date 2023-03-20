import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div style={{ fontSize: "2.5em", color: "white" }}>
          🅆 🄾{" "}
          <span
            style={{
              fontSize: "80px",
              backgroundColor: "#282c34",
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
              fontSize: "0.50em",
              color: "white",
            }}
          >
            By Ron's Fun & Games
          </p>
        </div>

        <div style={{ color: "white" }}></div>
      </div>
    );
  }
}
export default Header;

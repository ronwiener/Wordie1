import React from "react";

export default function Keypad({ usedKeys }) {
  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRow = ["Z", "X", "C", "V", "B", "N", "M", "←", "Enter"];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "340px",
        textAlign: "center",
        marginTop: "5px",
        marginBottom: "5px",
        letterSpacing: "2px",
        padding: "2px",
      }}
    >
      <div
        className="keypad"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {topRow.map((letter, idx) => {
          const color = usedKeys[letter.key];
          return (
            <div className={color} key={idx}>
              {letter}
            </div>
          );
        })}
      </div>
      <br />
      <div
        className="keypad"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {middleRow.map((letter, idx) => {
          const color = usedKeys[letter.key];
          return (
            <div className={color} key={idx}>
              {letter}
            </div>
          );
        })}
      </div>
      <br />
      <div
        className="keypad"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {bottomRow.map((letter, idx) => {
          const color = usedKeys[letter.key];
          return (
            <div className={color} key={idx}>
              {letter}
            </div>
          );
        })}
      </div>
    </div>
  );
}

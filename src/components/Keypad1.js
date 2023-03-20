import React, { useEffect, useState } from "react";
//import Button from "@mui/material/Button";

export default function Keypad1({ usedKeys, handleKeyup }) {
  const [letters, setLetters] = useState("");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, [handleKeyup, usedKeys]);

  return (
    <>
      {/*
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
          height: "30px",
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        <Button
          onClick={() => {
            alert("enter");
          }}
          size="small"
          variant="outlined"
          style={{
            color: "black",
            fontWeight: "600",
            fontSize: "0.65em",
            background: "lightgrey",
            border: "2px solid black",
            borderRadius: "6px",
            lineHeight: "30px",
          }}
        >
          Enter
        </Button>
        <Button
          onClick={() => {
            alert("delete");
          }}
          size="small"
          variant="outlined"
          style={{
            color: "black",
            fontWeight: "600",
            fontSize: "0.65em",
            background: "lightgrey",
            border: "2px solid black",
            borderRadius: "6px",
            lineHeight: "30px",
          }}
        >
          Delete
        </Button>
      </div>
        */}
      <div className="keypad">
        {letters &&
          letters.map((letter, i) => {
            const color = usedKeys[letter.key];
            return (
              <div key={i} className={color}>
                {letter.key}
              </div>
            );
          })}
      </div>
      <div></div>
    </>
  );
}

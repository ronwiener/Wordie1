import React from "react";
import Button from "@mui/material/Button";

export default function Keypad1({ usedKeys, onClick }) {
  const letters = [
    [{ key: "Enter" }],
    [{ key: "Backspace" }],
    [
      { key: "a" },
      { key: "b" },
      { key: "c" },
      { key: "d" },
      { key: "e" },
      { key: "f" },
      { key: "g" },
      { key: "h" },
      { key: "i" },
      { key: "j" },
      { key: "k" },
      { key: "l" },
      { key: "m" },
      { key: "n" },
      { key: "o" },
      { key: "p" },
      { key: "q" },
      { key: "r" },
      { key: "s" },
      { key: "t" },
      { key: "u" },
      { key: "v" },
      { key: "w" },
      { key: "x" },
      { key: "y" },
      { key: "z" },
    ],
  ];

  /*useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
        console.log(json);
      });
  }, []);
*/
  return (
    <>
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
        {letters &&
          letters[0].map((letter, i) => {
            return (
              <Button
                size="small"
                variant="outlined"
                onClick={() => onClick(letter.key)}
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
            );
          })}
        {letters &&
          letters[1].map((letter, i) => {
            return (
              <Button
                onClick={() => onClick(letter.key)}
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
                Del
              </Button>
            );
          })}
      </div>

      <div className="keypad">
        {letters &&
          letters[2].map((letter, i) => {
            const color = usedKeys[letter.key];

            return (
              <div
                key={i}
                className={color}
                onClick={() => onClick(letter.key)}
              >
                {letter.key}
              </div>
            );
          })}
      </div>
    </>
  );
}

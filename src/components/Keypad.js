import React from "react";

export default function Keypad1({ usedKeys, onClick }) {
  const letters = [
    [
      { key: "q" },
      { key: "w" },
      { key: "e" },
      { key: "r" },
      { key: "t" },
      { key: "y" },
      { key: "u" },
      { key: "i" },
      { key: "o" },
      { key: "p" },
    ],
    [
      { key: "a" },
      { key: "s" },
      { key: "d" },
      { key: "f" },
      { key: "g" },
      { key: "h" },
      { key: "j" },
      { key: "k" },
      { key: "l" },
    ],
    [
      { key: "Enter", icon: "⏎" },
      { key: "z" },
      { key: "x" },
      { key: "c" },
      { key: "v" },
      { key: "b" },
      { key: "n" },
      { key: "m" },
      { key: "Backspace", icon: "⌫" },
    ],
  ];

  return (
    <>
      {/*   <div
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
      </div> */}

      <div className="keypad">
        {letters &&
          letters[0].map((letter, i) => {
            const color = usedKeys[letter.key];

            return (
              <div
                key={i}
                className={color}
                onClick={() => onClick(letter.key)}
              >
                {letter.icon ? letter.icon : letter.key}
              </div>
            );
          })}
      </div>

      <div className="keypad">
        {letters &&
          letters[1].map((letter, i) => {
            const color = usedKeys[letter.key];

            return (
              <div
                key={i}
                className={color}
                onClick={() => onClick(letter.key)}
              >
                {letter.icon ? letter.icon : letter.key}
              </div>
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
                id={letter.icon ? `key_E` : `key_D`}
                onClick={() => onClick(letter.key)}
              >
                {letter.icon ? letter.icon : letter.key}
              </div>
            );
          })}
      </div>
    </>
  );
}

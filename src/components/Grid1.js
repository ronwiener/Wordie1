import React from "react";
import Row1 from "./Row1";

export default function Grid1({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row1 key={i} currentGuess={currentGuess} />;
        }
        return <Row1 key={i} guess={g} />;
      })}
    </div>
  );
}

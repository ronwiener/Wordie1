import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad1 from "./Keypad1";

export default function Wordle({ solution }) {
  const [message, setMessage] = useState("Can you guess the word?");
  const { currentGuess, handleKeyup, guesses, isCorrect, usedKeys, turn } =
    useWordle(solution);

  useEffect(() => {
    console.log(solution);
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setMessage("You Win! Well Done!");
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => {
        setMessage("Sorry, the word is: " + solution);
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn, solution]);

  return (
    <>
      <div
        style={{
          fontSize: "0.85em",
          paddingBottom: "8px",
          color: "lightgreen",
        }}
      >
        {message}
      </div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad1 usedKeys={usedKeys} handleKeyup={handleKeyup} />
    </>
  );
}

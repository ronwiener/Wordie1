import React, { useEffect, useState } from "react";
import useWordle1 from "../hooks/useWordle1";
import Grid1 from "./Grid1";
import Keypad1 from "./Keypad1";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Wordle1({ solution }) {
  const [message, setMessage] = useState("Can you guess the word?");
  const { currentGuess, handleKeyup, guesses, isCorrect, usedKeys, turn } =
    useWordle1(solution);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log(solution);
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setMessage("You Win!  Well Done!");
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5 && !isCorrect) {
      setTimeout(() => {
        setMessage("Sorry, the word is: " + solution.toUpperCase());
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn, solution]);

  /*
resetGame = () => {
    useWordle1();
}
  */

  return (
    <>
      <div
        style={{
          fontSize: matchesSM ? "1em" : "1.2em",
          paddingBottom: "8px",
          color: "lightgreen",
        }}
      >
        {message}
      </div>
      <Grid1 currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad1 usedKeys={usedKeys} onClick={(key) => handleKeyup({ key })} />
    </>
  );
}

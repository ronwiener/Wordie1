import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Toast from "./Toast";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Wordle({ solution }) {
  const [message, setMessage] = useState("Can you guess the word?");
  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    usedKeys,
    turn,
    notInWordList,
  } = useWordle(solution);

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

  return (
    <>
      <div
        style={{
          fontSize: matchesSM ? "1.0em" : "1.2em",
          paddingBottom: "8px",
          color: "lightgreen",
        }}
      >
        {message}
      </div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} onClick={(key) => handleKeyup({ key })} />
      {notInWordList && <Toast />}
    </>
  );
}

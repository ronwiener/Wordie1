import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
  const [history, setHistory] = useState([]); //each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); //ex. {a: 'green', b: 'yellow'}

  //format a guess into an array of letter objects
  //e.g. [key: "a", color: "yellow"]
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });
    //find any light green letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = "lightgreen";
        solutionArray[i] = null;
      }
    });

    //find any light blue colors
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "lightgreen") {
        formattedGuess[i].color = "lightblue";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  /*add a new guess to the guesses state
   update the isCorrect state if the guess is correct
   add one to the turn state
   */
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === "lightgreen") {
          newKeys[letter.key] = "lightgreen";
          return;
        }
        if (letter.color === "lightblue" && currentColor !== "lightgreen") {
          newKeys[letter.key] = "lightblue";
          return;
        }
        if (
          letter.color === "grey" &&
          currentColor !== "lightgreen" &&
          currentColor !== "lightblue"
        ) {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  //handle keyup event & track current guess
  //if user presses enter, add the new  guess
  const handleKeyup = ({ key }) => {
    console.log(key);
    if (key === "Enter") {
      //only add guess if turn if less than 5
      if ((turn > 5) & isCorrect) {
        return;
      }
      //do not allow duplicate words
      if (history.includes(currentGuess)) {
        return;
      }
      //check work is 5 characters long
      if (currentGuess.length !== 5) {
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
};

export default useWordle;

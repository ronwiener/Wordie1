import { useState, useEffect } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); //ex. {a: 'green', b: 'yellow'}
  const [notInWordList, setNotInWordList] = useState(false);
  const [textData, setTextData] = useState();

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

  let downloadDictionary = async () => {
    let res = await fetch("fiveWordCheck.txt");
    if (res.status !== 200) {
      throw new Error("Sorry Server not responding");
    }
    let text_data = await res.text();
    let wordList = text_data.split("\n");
    console.log(wordList);
    setTextData(wordList);
  };

  useEffect(() => {
    downloadDictionary();
  }, []);

  //handle keyup event & track current guess
  //if user presses enter, add the new  guess
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (!textData.map((w) => w).includes(currentGuess)) {
        setNotInWordList(true);
        return;
      }
      //only add guess if turn if less than 5
      if ((turn > 5) & isCorrect) {
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
      setNotInWordList(false);
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (key === "_") {
      if (currentGuess.length < 4) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setNotInWordList(false);
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
    notInWordList,
  };
};

export default useWordle;

/*
make method getWordList and use fetch to get 5lettertext file.  
set to wordList and set in state.  follow example of downloadDictionary
*/

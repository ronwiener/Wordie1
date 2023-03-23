import React, { useEffect, useState } from "react";
import Header1 from "./components/Header1";
import Wordle1 from "./components/Wordle1";

function AppSix() {
  const [solution, setSolution] = useState();

  let downloadDictionary = async () => {
    let res = await fetch("sixLetterWords.txt");
    if (res.status !== 200) {
      throw new Error("Sorry Server not responding");
    }
    let text_data = await res.text();
    let wordList = text_data.split("\n");
    const randomSolution =
      wordList[Math.floor(Math.random() * wordList.length)];
    setSolution(randomSolution);
  };

  useEffect(() => {
    downloadDictionary();
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <Header1 />
        {solution && <Wordle1 solution={solution} />}
      </header>
    </div>
  );
}

export default AppSix;

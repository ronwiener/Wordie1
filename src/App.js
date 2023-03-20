import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState();

  let downloadDictionary = async () => {
    let res = await fetch("fiveLetterWords.txt");
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
        <Header />
        {solution && <Wordle solution={solution} />}
      </header>
    </div>
  );
}

export default App;

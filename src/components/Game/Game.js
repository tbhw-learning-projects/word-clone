import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import MoodBanner from "../MoodBanner/MoodBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [didWin, setDidWin] = React.useState(false);
  const isOver = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setDidWin(false);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />

      <GuessInput
        guesses={guesses}
        handleGuess={(guess) => {
          setGuesses((g) => [...g, guess]);
          setDidWin(guess === answer);
        }}
      />

      {(isOver || didWin) && (
        <MoodBanner
          mood={didWin ? "happy" : "sad"}
          guessCount={guesses.length}
          answer={answer}
        >
          <button onClick={resetGame}>
            <strong>Play again</strong>
          </button>
        </MoodBanner>
      )}
    </>
  );
}

export default Game;

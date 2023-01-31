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
  const [guesses, setGuesses] = React.useState([]);
  const [didWin, setDidWin] = React.useState(false);

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {guesses.length < NUM_OF_GUESSES_ALLOWED && (
        <GuessInput
          guesses={guesses}
          handleGuess={(guess) => {
            setGuesses((g) => [...g, guess]);
            setDidWin(
              guesses.length >= NUM_OF_GUESSES_ALLOWED || guess === answer
            );
          }}
        />
      )}
      {(guesses.length >= NUM_OF_GUESSES_ALLOWED || didWin) && (
        <MoodBanner
          mood={didWin ? "happy" : "sad"}
          guessCount={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;

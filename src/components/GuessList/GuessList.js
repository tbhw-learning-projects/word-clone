import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const grid = Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () =>
  Math.random()
);
const wordRow = Array.from({ length: 5 }, () => Math.random());
function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {grid.map((id, i) => {
        const guess = guesses[i];
        const characters = checkGuess(guess, answer);
        return <Guess key={id} characters={characters} />;
      })}
    </div>
  );
}

function Guess({ characters }) {
  return (
    <p className="guess">
      {wordRow.map((id, i) => (
        <span
          key={id}
          className={`cell ${characters ? characters[i].status : ""}`}
        >
          {characters && characters[i].letter}
        </span>
      ))}
    </p>
  );
}

export default GuessList;

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
        return (
          <p className="guess" key={id}>
            {wordRow.map((rowId, i) => (
              <span
                key={rowId}
                className={`cell ${characters ? characters[i].status : ""}`}
              >
                {characters && characters[i].letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;

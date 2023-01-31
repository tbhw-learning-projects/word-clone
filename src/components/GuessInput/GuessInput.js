import React from "react";

function GuessInput({ handleGuess, guesses }) {
  const [value, setValue] = React.useState("");
  const [isDuplicate, setIsDuplicate] = React.useState(false);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        if (!isDuplicate) {
          handleGuess(value);
          setValue("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guess"
        type="text"
        style={
          isDuplicate ? { borderColor: "red", outlineColor: "red" } : undefined
        }
        value={value}
        onChange={({ target: { value } }) => {
          setIsDuplicate(false);
          setValue(value);
          if (guesses.includes(value)) {
            setIsDuplicate(true);
          }
        }}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;

import React from "react";

function GuessInput({ handleGuess, guesses }) {
  const [value, setValue] = React.useState("");
  const [isDuplicate, setIsDuplicate] = React.useState(false);

  function onGuessSubmit(event) {
    event.preventDefault();

    if (!isDuplicate) {
      handleGuess(value.toUpperCase());
      setValue("");
    }
  }

  function onUpdateGuess({ target: { value } }) {
    setIsDuplicate(false);
    setValue(value.toUpperCase());
    if (guesses.includes(value)) {
      setIsDuplicate(true);
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guess"
        type="text"
        style={
          isDuplicate ? { borderColor: "red", outlineColor: "red" } : undefined
        }
        value={value}
        onChange={onUpdateGuess}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;

import React from "react";

function MoodBanner({ mood, guessCount, answer }) {
  return (
    <div className={`${mood} banner`}>
      {mood === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessCount} guesses</strong>.
        </p>
      )}
      {mood === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default MoodBanner;

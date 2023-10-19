import React from "react";

export default function App() {
  return (
    <main>
      <article className="summary">
        <div className="summary__results">
          <h1 className="summary__title">Your Result</h1>
          <p className="summary__score">
            <p className="summary__finalscore">76</p> of 100
          </p>
          <p className="summary__descr">
            <span>Great</span> You scored higher than 65% of the people who have
            taken these tests.
          </p>
        </div>
        <div className="summary_details">
          <p className="summary_subtitle">Summary</p>
          <div className="summary_grades">
            <span>Reaction 80 / 100</span>
            <span>Memory 92 / 100</span>
            <span>Verbal 61 / 100</span>
            <span>Visual 72 / 100</span>
          </div>
          <button>Continue</button>
        </div>
      </article>
    </main>
  );
}

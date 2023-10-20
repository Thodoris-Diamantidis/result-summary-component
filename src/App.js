import React from "react";
import data from "./data.json";

export default function App() {
  const bgcolors = [
    "var(--clr-primary-lightRed-100)",
    "var(--clr-primary-orangeyYellow-300)",
    "var(--clr-primary-greenTeal-200)",
    "var(--clr-primary-cobaltBlue-200)",
  ];

  const headingColors = [
    "var(--clr-primary-lightRed-300)",
    "var(--clr-primary-orangeyYellow-600)",
    "var(--clr-primary-greenTeal-400)",
    "var(--clr-primary-cobaltBlue-500)",
  ];

  return (
    <main>
      <article className="summary">
        <div className="summary__results">
          <h1 className="summary__title">Your Result</h1>
          <div className="summary__score">
            <p className="summary__finalscore">76</p> of 100
          </div>
          <p className="summary__descr">
            <span>Great</span> You scored higher than 65% of the people who have
            taken these tests.
          </p>
        </div>
        <div className="summary__details">
          <p className="summary__subtitle">Summary</p>
          <div className="summary__grades">
            {data.map((item, index) => (
              <div
                className="summary__grade"
                key={index}
                style={{ backgroundColor: bgcolors[index] }}
              >
                <p style={{ color: headingColors[index] }}>
                  <img src={item.icon} alt="itemicon" />
                  {item.category}
                </p>
                <p>
                  <span>{item.score}</span> / 100
                </p>
              </div>
            ))}
          </div>

          <button className="button">Continue</button>
        </div>
      </article>
    </main>
  );
}

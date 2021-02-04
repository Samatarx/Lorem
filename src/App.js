import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(count);

    if (number <= 0) {
      number = 1;
    }
    if (number > data.length) {
      number = data.length;
    }
    setText(data.slice(0, number));
  };

  return (
    <main>
      <section className="section-center">
        <h3>Tired of Boring Lorem Ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">Generate</button>
        </form>
        <article className="lorem-text">
          {text.map((para, index) => {
            return <p key={index}>{para}</p>;
          })}
        </article>
      </section>
    </main>
  );
}

export default App;

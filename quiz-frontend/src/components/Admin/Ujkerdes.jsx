import React from 'react';
import { useState } from "react";
import { KerdesekContext } from "../../context/KerdesekContext";
import { useContext } from "react";

export default function Ujkerdes() {
  const { postKerdes } = useContext(KerdesekContext);
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [helyesvalasz, setHelyesvalasz] = useState("answer1");
  const [difficulty, setDifficulty] = useState("easy");
  function kuld(event) {
    event.preventDefault();

    const quiz = {
      questiontext: question,
      difficulty: difficulty,
      answers: [
        { answer_text: answer1, right_answer: helyesvalasz === "answer1" },
        { answer_text: answer2, right_answer: helyesvalasz === "answer2" },
        { answer_text: answer3, right_answer: helyesvalasz === "answer3" },
        { answer_text: answer4, right_answer: helyesvalasz === "answer4" },
      ],
    };
    console.log(quiz);
    postKerdes(quiz);
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    setHelyesvalasz("answer1");
    setQuestion("");

  }

  return (
    <div className="border mt-3 qqp-3">
      <form onSubmit={kuld}>
        <div className="mb-3">
          <label htmlFor="difficulty" className="form-label">
            Nehézség:
          </label>
          <select
            id="difficulty"
            className="form-select"
            value={difficulty} question
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Könnyű</option>
            <option value="medium">Közepes</option>
            <option value="hard">Nehéz</option>
          </select>
        </div>
        <div className="mn-3">
          <label htmlFor="question" className="form-label">
            Kérdés:
          </label>
          <input
            type="text"
            className="form-control"
            id="question"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            aria-describedby="questionHelp"
            required
          />
          <div id="questionHelp" className="form-text">
            A kérdés megadása kötelező!
          </div>
        </div>
        <div className="border mt-3 p-3">
          <div className="mb-3">
            <label htmlFor="answer1" className="form-label">
              1. válasz:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="helyesvalasz"
                id="radio1"
                value="answer1"
                checked={helyesvalasz === "answer1"}
                onChange={(e) => setHelyesvalasz(e.target.value)}
              />
              <label className="form-check-label" htmlFor="radio1">
                Helyes válasz
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              id="answer1"
              value={answer1}
              onChange={(e) => {
                setAnswer1(e.target.value);
              }}
              aria-describedby="answer1Help"
              required
            />
            <div id="answer1Help" className="form-text">
              Legalább 2 válasz megadása kötelező!
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="answer2" className="form-label">
              2. válasz:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="helyesvalasz"
                id="radio2"
                value="answer2"
                checked={helyesvalasz === "answer2"}
                onChange={(e) => setHelyesvalasz(e.target.value)}
              />
              <label className="form-check-label" htmlFor="radio2">
                Helyes válasz
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              id="answer2"
              value={answer2}
              onChange={(e) => {
                setAnswer2(e.target.value);
              }}
              aria-describedby="answer2Help"
              required
            />
            <div id="answer2Help" className="form-text">
              Legalább 2 válasz megadása kötelező!
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="answer3" className="form-label">
              3. válasz:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="helyesvalasz"
                id="radio3"
                value="answer3"
                checked={helyesvalasz === "answer3"}
                onChange={(e) => setHelyesvalasz(e.target.value)}
              />
              <label className="form-check-label" htmlFor="radio3">
                Helyes válasz
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              id="answer3"
              value={answer3}
              onChange={(e) => {
                setAnswer3(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="answer4" className="form-label">
              4. válasz:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="helyesvalasz"
                id="radio4"
                value="answer4"
                checked={helyesvalasz === "answer4"}
                onChange={(e) => setHelyesvalasz(e.target.value)}
              />
              <label className="form-check-label" htmlFor="radio4">
                Helyes válasz
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              id="answer4"
              value={answer4}
              onChange={(e) => {
                setAnswer4(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Kérdés beküldése
        </button>
      </form>

    </div>
  );
}

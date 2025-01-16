// useState, setState, useRef;

import { useState, useRef, useEffect } from "react";

export default function PracticeRandom() {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const generateQuestion = () => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const operators = ["+", "-", "*"];
    const shuffleOperators = shuffleArray([...operators]);
    const operator =
      shuffleOperators[Math.floor(Math.random() * shuffleOperators.length)];

    const shuffledNumbers = shuffleArray([...Array(20).keys()]);
    const num1 = shuffledNumbers[0];
    const num2 = shuffledNumbers[1];

    setQuestion(`${num1} ${operator} ${num2}`);
    setCorrectAnswer(eval(`${num1} ${operator} ${num2}`));
  };

  const handleSubmit = () => {
    const inputAnswer = inputRef.current.value.trim();

    if (inputAnswer === "") {
      alert("답을 입력하시오");
      inputRef.current.focus();
      return;
    }

    if (isNaN(inputAnswer)) {
      alert("숫자를 입력하시오");
      inputRef.current.value = "";
      inputRef.current.focus();
      return;
    }

    if (parseInt(inputAnswer, 10) === correctAnswer) {
      alert("정답!!");
      setCorrectCount((prev) => prev + 1);
    } else {
      alert("오답!!!");
      setIncorrectCount((prev) => prev + 1);
    }

    inputRef.current.value = "";
    inputRef.current.focus();
    generateQuestion();
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div>
      <h1>랜덤 문제</h1>
      <p>{question}</p>
      <input
        type="text"
        placeholder="답 입력"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>제출</button>
      <div>
        <h4>정답 횟수: {correctCount}</h4>
        <h4>오답 횟수: {incorrectCount}</h4>
      </div>
    </div>
  );
}

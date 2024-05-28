import React, { useState } from "react";
import QuestTimer from "./QuestTimer";
import Answers from "./Answers";
import QUESTIONS from "../../questions";

const Question = ({ onSelectAnswer, onSkipAnswer, index }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <div id="questions">
        <QuestTimer
          key={timer}
          timeout={timer}
          onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          onSelect={handleSelectAnswer}
          answerState={answerState}
          selectedAnswer={answer.selectedAnswer}
        />
      </div>
    </div>
  );
};

export default Question;

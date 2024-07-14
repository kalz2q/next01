"use client";
import React, { useEffect, useState } from "react";
// utf をオブジェクトにする 途中
// 問題が切り替わらない
// 終了時が駄目

export default function Home() {
  interface QA {
    Q: string;
    A: string;
  }
  const utf: QA[] = [
    { Q: "one", A: "1部分集合、サブセット" },
    { Q: "two", A: "2部分集合、サブセット、スーパーセット" },
    { Q: "three", A: "3部分集合、サブセットq" },
    { Q: "four", A: "4部分集合、スーパーセットq、スーパーセットq" },
  ];

  const [questions, setQuestions] = useState(utf);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizNum, setQuizNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    setQuiz(questions);
  }, []);

  const setQuiz = (questions) => {
    setShowAnswer(false);
    setSelectedButton("");
    const randomQuizNum = Math.floor(Math.random() * questions.length);
    setQuizNum(randomQuizNum);
    if (questions.length !== 0) {
      setCurrentQuestion(questions[randomQuizNum].Q);
      setCurrentAnswer(questions[randomQuizNum].A);
    }
  };

  const handleShowAnserClick = () => {
    setShowAnswer(true);
  };

  // const handleNextButtonClick = () => {
  //   if (selectedButton === "deletebutton") {
  //     const newQuestions = questions.filter((_, index) => index !== quizNum);
  //     setQuestions(newQuestions);
  //     console.log(questions);
  //   }
  //   setQuiz();
  // };

  const handleDeleteButtonClick = () => {
    const newQuestions = questions.filter((_, index) => index !== quizNum);
    setQuestions(newQuestions);
    setQuiz(newQuestions);
  };

  const handleKeepButtonClick = () => {
    setQuiz(questions);
  };

  return (
    <div className="container p-4">
      <div id="score" className="">
        <p>
          問題数 {questions.length} / {Object.keys(utf).length}
        </p>
      </div>
      {questions.length === 0 && <div className="text-8xl">お疲れ!</div>}
      <div
        id="question"
        className="bg-red-200 text-blue-400 text-3xl h-24 rounded-lg p-4 mb-4"
        onClick={handleShowAnserClick}
      >
        {currentQuestion}
      </div>
      {showAnswer && (
        <>
          <div
            id="answer"
            className="bg-orange-200 text-black h-24 rounded-lg
             p-4 mb-4"
          >
            {currentAnswer}
          </div>
          <div className="buttons flex justify-end">
            <div
              id="deletebutton"
              className="button  bg-blue-600 text-white shadow-md rounded p-4 mb-4 cursor-pointer "
              onClick={handleDeleteButtonClick}
            >
              削除
            </div>
            <div
              id="rightbutton"
              className="bg-green-500 text-white shadow-md rounded p-4 mb-4 cursor-pointer ml-2"
              onClick={handleKeepButtonClick}
            >
              残す
            </div>
          </div>
        </>
      )}
    </div>
  );
}

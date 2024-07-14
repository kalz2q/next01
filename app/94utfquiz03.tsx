"use client";
import React, { useEffect, useState } from "react";
// utf をオブジェクトにする 途中

export default function Home() {
  interface QA {
    Q: string;
    A: string;
  }
  const utf: QA[] = [
    { Q: "⊂", A: "部分集合、サブセット" },
    { Q: "⊃", A: "部分集合、サブセット、スーパーセット" },
    { Q: "⊆", A: "部分集合、サブセット" },
    { Q: "⊇", A: "部分集合、スーパーセット、スーパーセット" },
  ];
  const [questions, setQuestions] = useState(Object.keys(utf));
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizNum, setQuizNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    setQuiz();
  }, []);

  const setQuiz = () => {
    if (questions.length === 0) {
      // 結果表示のロジック
      document.getElementById("result")?.classList.add("show");
    }
    setShowAnswer(false);
    setSelectedButton("");
    const randomQuizNum = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(utf[questions[randomQuizNum]].Q);
    setCurrentAnswer(utf[questions[randomQuizNum]].A);
  };

  const handleShowAnseClick = () => {
    setShowAnswer(true);
  };

  const handleNextButtonClick = () => {
    if (selectedButton === "deletebutton") {
      const newQuestions = questions.filter((_, index) => index !== quizNum);
      setQuestions(newQuestions);
    }
    setQuiz();
  };

  const handleDeleteButtonClick = () => {
    const newQuestions = questions.filter((_, index) => index !== quizNum);
    setQuestions(newQuestions);

    setQuiz();
  };

  const handleKeepButtonClick = () => {
    setQuiz();
  };

  return (
    <div className="container p-4">
      <div id="score" className="">
        <p>
          問題数 {questions.length} / {Object.keys(utf).length}
        </p>
      </div>
      <div
        id="question"
        className="bg-red-200 text-blue-400 text-3xl h-24 rounded-lg p-4 mb-4"
        onClick={handleShowAnseClick}
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

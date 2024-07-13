"use client";
import React, { useEffect, useState } from "react";
// 暗記形式にした

export default function Home() {
  const utf = {
    "⊂": "部分集合、サブセット",
    "⊃": "部分集合、サブセット、スーパーセット",
    "⊆": "部分集合、サブセット",
    "⊇": "部分集合、スーパーセット、スーパーセット",
    "⊤": "ダウンタック",
    "⊥": "垂直、アップタック",
    "⊿": "直角三角、ライト・トライアングル",
    "⋮": "縦省略記号、垂直省略記号、バーティカル・エリプシス",
    "⋯": "水平省略記号、横省略記号、ホリゾンタル・エリプシス、三点",
    "⋰": "斜め右上省略記号",
    "⋱": "斜め右下省略記号",
    "∀": "すべての、フォーオール",
    "∂": "偏微分、デル、ラウンドディー",
    "∃": "存在する、イグジスト",
    "∅": "空集号、エンプティセット",
    "∇": "ナブラ",
    "∈": "属する、エレメント",
    "∋": "含む、元として含む、メンバー",
    "∏": "積、プロダクト",
    "∐": "コプロダクト",
    "∑": "シグマ、合計",
    "−": "マイナス、引く、負符号、減算",
    "∓": "マイナスプラス",
    "∔": "ドットプラス",
    "∕": "割り算、ディビジョン",
    "∖": "集合マイナス",
    "∗": "アステリスク、掛ける、掛け算",
    "∘": "丸、小丸、合成関数、関数の積",
    "√": "平方根、ルート",
    "∝": "比例、プロポーション",
    "∞": "無限大、インフィニティ",
    "∟": "直角、ライトアングル",
    "∠": "角、アングル",
    "∥": "平行、パラレル",
    "∧": "及び、論理アンド",
    "∨": "または、論理オア",
    "∩": "共通集合、インターセクション",
    "∪": "合併集合、ユニオン",
    "∫": "積分記号、インテグラル",
    "∬": "二重積分",
    "∴": "ゆえに、ゼアフォー",
    "∵": "なぜならば、ビコーズ",
    "∶": "対、比率、レーシオ",
  };
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
    setCurrentQuestion(questions[randomQuizNum]);
    setCurrentAnswer(utf[questions[randomQuizNum]]);
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

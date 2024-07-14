"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  interface QA {
    Q: string;
    A: string;
  }
  const utf: QA[] = [
    { Q: "⊂", A: "部分集合、サブセット" },
    { Q: "⊃", A: "部分集合、サブセット、スーパーセット" },
    { Q: "⊆", A: "部分集合、サブセットeq" },
    { Q: "⊇", A: "部分集合、スーパーセットeq" },
    { Q: "⊤", A: "ダウンタック" },
    { Q: "⊥", A: "垂直、アップタック" },
    { Q: "⊿", A: "直角三角、ライト・トライアングル" },
    { Q: "⋮", A: "縦省略記号、垂直省略記号、バーティカル・エリプシス" },
    { Q: "⋯", A: "水平省略記号、横省略記号、ホリゾンタル・エリプシス、三点" },
    { Q: "⋰", A: "斜め右上省略記号" },
    { Q: "⋱", A: "斜め右下省略記号" },
    { Q: "∀", A: "すべての、フォーオール" },
    { Q: "∂", A: "偏微分、デル、ラウンドディー" },
    { Q: "∃", A: "存在する、イグジスト" },
    { Q: "∅", A: "空集号、エンプティセット" },
    { Q: "∇", A: "ナブラ" },
    { Q: "∈", A: "属する、エレメント" },
    { Q: "∋", A: "含む、元として含む、メンバー" },
    { Q: "∏", A: "積、プロダクト" },
    { Q: "∐", A: "コプロダクト" },
    { Q: "∑", A: "シグマ、合計" },
    { Q: "−", A: "マイナス、引く、負符号、減算" },
    { Q: "∓", A: "マイナスプラス" },
    { Q: "∔", A: "ドットプラス" },
    { Q: "∕", A: "割り算、ディビジョン" },
    { Q: "∖", A: "集合マイナス" },
    { Q: "∗", A: "アステリスク、掛ける、掛け算" },
    { Q: "∘", A: "丸、小丸、合成関数、関数の積" },
    { Q: "√", A: "平方根、ルート" },
    { Q: "∝", A: "比例、プロポーション" },
    { Q: "∞", A: "無限大、インフィニティ" },
    { Q: "∟", A: "直角、ライトアングル" },
    { Q: "∠", A: "角、アングル" },
    { Q: "∥", A: "平行、パラレル" },
    { Q: "∧", A: "及び、論理アンド" },
    { Q: "∨", A: "または、論理オア" },
    { Q: "∩", A: "共通集合、インターセクション" },
    { Q: "∪", A: "合併集合、ユニオン" },
    { Q: "∫", A: "積分記号、インテグラル" },
    { Q: "∬", A: "二重積分" },
    { Q: "∴", A: "ゆえに、ゼアフォー" },
    { Q: "∵", A: "なぜならば、ビコーズ" },
    { Q: "∷", A: "割合、プロポーション" },
    { Q: "∸", A: "ドットマイナス" },
    { Q: "∼", A: "チルダ" },
    { Q: "≡", A: "合同、アイデンティカル" },
    { Q: "≤", A: "小なりイコール" },
    { Q: "≥", A: "大なりイコール" },
    { Q: "α", A: "アルファ" },
    { Q: "β", A: "ベータ" },
    { Q: "Γ", A: "ガンマの大文字" },
    { Q: "γ", A: "ガンマ" },
    { Q: "Δ", A: "デルタの大文字" },
    { Q: "δ", A: "デルタ" },
    { Q: "ε", A: "エプシロン、イプシロン" },
    { Q: "ζ", A: "ゼータ" },
    { Q: "η", A: "エータ、イータ" },
    { Q: "θ", A: "テータ、シータ、セータ" },
    { Q: "ι", A: "イオタ" },
    { Q: "κ", A: "カッパ" },
    { Q: "Λ", A: "ラムダの大文字" },
    { Q: "λ", A: "ラムダ" },
    { Q: "μ", A: "ミュー" },
    { Q: "ν", A: "ニュー" },
    { Q: "Ξ", A: "大文字のクサイ、グザイ、クシー" },
    { Q: "ξ", A: "クサイ、グザイ、クシー" },
    { Q: "ο", A: "オミクロン" },
    { Q: "Π", A: "パイの大文字" },
    { Q: "π", A: "パイ" },
    { Q: "ρ", A: "ロー" },
    { Q: "Σ", A: "シグマの大文字、合計" },
    { Q: "σ", A: "シグマ" },
    { Q: "τ", A: "タウ" },
    { Q: "υ", A: "ウプシロン" },
    { Q: "Φ", A: "ファイの大文字" },
    { Q: "φ", A: "ファイ" },
    { Q: "χ", A: "カイ" },
    { Q: "Ψ", A: "プサイ、プシーの大文字" },
    { Q: "ψ", A: "プサイ、プシー" },
    { Q: "Ω", A: "オメガの大文字、オーム" },
    { Q: "ω", A: "オメガ" },
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

  const handleDeleteButtonClick = () => {
    const newQuestions = questions.filter((_, index) => index !== quizNum);
    setQuestions(newQuestions);
    setQuiz(newQuestions);
  };

  const handleKeepButtonClick = () => {
    setQuiz(questions);
  };

  function QandA() {
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
          onClick={() => setShowAnswer(true)}
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

  {
    if (questions.length === 0) {
      return <div className="text-8xl">お疲れ!</div>;
    } else return <QandA />;
  }
}

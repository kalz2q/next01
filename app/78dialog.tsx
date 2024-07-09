"use client";
import { useState } from "react";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="js-open bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        開く
      </button>
      {isOpen && (
        <div className="">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>これがダイアログです</p>
            <button
              type="button"
              className="js-close bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setIsOpen(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="m-8">
      <Dialog />
    </div>
  );
}

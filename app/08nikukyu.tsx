export default function Home() {
  // from qiita CSSを使って自分好みの動くアイコンを作る
  // original は @keyframes で box-shadow と transform: rotateY を使ってる
  return (
    <div className="min-h-screen p-6">
      <div
        className="animate-spin relative w-32 h-32 rounded-full bg-white border-4
       border-zinc-500 mx-auto "
      >
        <div className="relative mx-auto w-full h-full paw hover:animate-[kaiten_1.5s_linear_1]">
          <div className="absolute z-[999] w-[30%] h-[50%] rounded-[50px] bg-[#ccc] mx-auto left-0 right-0 bottom-[10%] paw-center"></div>
          <div className="absolute z-[998] w-[65%] h-[35%] rounded-[70px] bg-[#ccc] mx-auto left-0 right-0 bottom-[10%] paw-bottom"></div>
          <div className="absolute z-[1000] w-[20px] h-[25px] rounded-full bg-[#ccc] mx-auto left-[8%] top-[30%] transform rotate-[-35deg] nikukyu1"></div>
          <div className="absolute z-[1000] w-[20px] h-[25px] rounded-full bg-[#ccc] mx-auto left-[28%] top-[12%] transform rotate-[-10deg] nikukyu2"></div>
          <div className="absolute z-[1000] w-[20px] h-[25px] rounded-full bg-[#ccc] mx-auto right-[28%] top-[12%] transform rotate-[10deg] nikukyu3"></div>
          <div className="absolute z-[1000] w-[20px] h-[25px] rounded-full bg-[#ccc] mx-auto right-[8%] top-[30%] transform rotate-[35deg] nikukyu4"></div>
        </div>
      </div>
    </div>
  );
}

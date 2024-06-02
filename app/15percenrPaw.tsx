export default function Home() {
  return (
    // css art がハンドリングのために % だけで書くように変更したい
    // 動きはとめる
    <div className="min-h-screen p-6">
      <div
        className="relative w-52 h-52 rounded-full bg-white border-4
       border-zinc-500 mx-auto  "
      >
        <div className="absolute  w-[30%] h-[50%] rounded-full bg-cyan-200 mx-auto left-0 right-0 bottom-[10%] paw-center"></div>
        <div className="absolute  w-[65%] h-[33%] rounded-full bg-cyan-200 mx-auto left-0 right-0 bottom-[10%] paw-bottom"></div>
        <div className="absolute  w-[20%] h-[27%] rounded-full bg-green-200 mx-auto left-[8%] top-[27%] transform rotate-[-35deg] nikukyu1"></div>
        <div className="absolute  w-[20%] h-[27%] rounded-full bg-orange-200 mx-auto left-[28%] top-[12%] transform rotate-[-10deg] nikukyu2"></div>
        <div className="absolute  w-[20%] h-[27%] rounded-full bg-pink-200 mx-auto right-[28%] top-[12%] transform rotate-[10deg] nikukyu3"></div>
        <div className="absolute  w-[20%] h-[27%] rounded-full bg-rose-200 mx-auto right-[8%] top-[30%] transform rotate-[35deg] nikukyu4"></div>
      </div>
    </div>
  );
}

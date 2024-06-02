export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <div
        className="relative w-32 h-32 rounded-full bg-white border-4
       border-zinc-500 mx-auto ease-in-out duration-500 
       animate-[flip_3s_linear_infinite] "
      >
        <div className="relative mx-auto w-full h-full paw  ">
          <div className="absolute  w-[30%] h-[50%] rounded-[50px] bg-orange-200 mx-auto left-0 right-0 bottom-[10%] paw-center"></div>
          <div className="absolute  w-[65%] h-[35%] rounded-[70px] bg-cyan-200 mx-auto left-0 right-0 bottom-[10%] paw-bottom"></div>
          <div className="absolute  w-[20px] h-[25px] rounded-full bg-green-200 mx-auto left-[8%] top-[30%] transform rotate-[-35deg] nikukyu1"></div>
          <div className="absolute  w-[20px] h-[25px] rounded-full bg-orange-200 mx-auto left-[28%] top-[12%] transform rotate-[-10deg] nikukyu2"></div>
          <div className="absolute  w-[20px] h-[25px] rounded-full bg-pink-200 mx-auto right-[28%] top-[12%] transform rotate-[10deg] nikukyu3"></div>
          <div className="absolute  w-[20px] h-[25px] rounded-full bg-sky-200 mx-auto right-[8%] top-[30%] transform rotate-[35deg] nikukyu4"></div>
        </div>
      </div>
    </div>
  );
}

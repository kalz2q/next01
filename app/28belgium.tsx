export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-[200px] h-[150px] mx-auto mt-10 bg-slate-300 flex">
        <div className="w-[calc(100%/3)]   bg-black "></div>
        <div className="w-[calc(100%/3)]  bg-yellow-300 "></div>
        <div className="w-[calc(100%/3)]  bg-red-500 "></div>
      </div>
    </div>
  );
}

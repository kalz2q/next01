export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative w-44 h-44 mx-auto mt-10 rounded-full bg-red-400">
        <div className="absolute top-[50%] left-[50%] w-[80%] pt-[80%] rounded-full bg-blue-400 transform -translate-x-[50%] -translate-y-[50%]"></div>
        <div className="absolute top-[50%] left-[50%] w-[60%] pt-[60%] bg-yellow-400 rounded-full transform -translate-x-[50%] -translate-y-[50%]"></div>
        <div className="absolute top-[50%] left-[50%] w-[40%] pt-[40%] bg-green-400 rounded-full transform -translate-x-[50%] -translate-y-[50%]"></div>
        <div className="absolute top-[50%] left-[50%] w-[20%] pt-[20%] bg-black rounded-full transform -translate-x-[50%] -translate-y-[50%]"></div>
      </div>
    </div>
  );
}

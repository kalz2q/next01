export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative w-44 h-44 mx-auto mt-10 rounded-full bg-pink-300">
        <div className="absolute top-[50%] left-[50%] w-[75%] pt-[75%] rounded-full bg-blue-400 transform -translate-x-[50%] -translate-y-[50%]">
          <div className="absolute top-[50%] left-[50%] w-[75%] pt-[75%] bg-yellow-400 rounded-full transform -translate-x-[50%] -translate-y-[50%]">
            <div className="absolute top-[50%] left-[50%] w-[75%] pt-[75%] bg-green-400 rounded-full transform -translate-x-[50%] -translate-y-[50%]">
              <div className="absolute top-[50%] left-[50%] w-[75%] pt-[75%] bg-red-400 rounded-full transform -translate-x-[50%] -translate-y-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

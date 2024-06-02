export default function Home() {
  return (
    <div className="min-h-screen">
      <section className=" border-gray-400 border-8 rounded-full py-16 mb-2 bg-cover">
        <div className="w-48 h- bg-orange-400 relative  cursor-pointer mx-auto   rounded-full">
          <div
            id="eye_left"
            className="w-[40%] h-[40%] absolute top-[20%] left-[5%] bg-white rounded-full"
          >
            <div
              id="iris_left"
              className="w-[50%] h-[50%] mx-auto mt-[30%] bg-black rounded-full"
            ></div>
          </div>
          <div
            id="eye_right"
            className="w-[40%] h-[40%] absolute top-[20%] right-[5%] bg-white rounded-full"
          >
            <div
              id="iris_right"
              className=" w-[50%] h-[50%] mx-auto mt-[30%] bg-black rounded-full"
            ></div>
          </div>
          <div
            id="mouth"
            className="absolute w-[40%] h-[0%] top-[60%] left-[30%] border-l-8   border-r-8 border-t-[20px]  border-t-red-500 border-b-[25px] border-l-transparent border-r-transparent border-b-transparent transform rotate-180 rounded-full "
          ></div>
        </div>
        <h1 className="text-center text-3xl pt-6">名無しの権兵衛</h1>
        <p className="text-center pt-6">
          ボケ防止にプログラミング頑張っています。温かく見守って下さい。
        </p>
      </section>
      <footer className="text-center">(c) kalz2q </footer>
    </div>
  );
}

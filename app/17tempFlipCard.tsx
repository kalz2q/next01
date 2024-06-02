export default function Home() {
  // simplify flipCard
  // map を外してみる
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col bg-black">
        <div
          className="bg-slate-800 flex-grow w-full flex items-center justify-center 
        flex-col group cursor-pointer"
        >
          <div
            className="grid grid-cols-9 gap-1 my-4 w-full text-center 
          font-extrabold font text-3xl lg:text-6xl sm:text-6xl md:text-4xl"
          >
            <div
              className="relative bg-red-800 transform transition ease-in-out 
                shadow-xl shadow-black/40 [transform-style:preserve-3d] 
                group-hover:[transform:rotateY(180deg)] duration-1000 "
            >
              <div className="bg-red-800">F</div>
              <div
                className="absolute  inset-0 h-full w-full bg-blue-500  [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

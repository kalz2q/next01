export default function Home() {
  // from
  // problem with tailwind filp card flip in any order
  const tablets = {
    front: ["F", "r", "a"],
    back: ["D", "e", "v"],
  };
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col bg-blue-500">
        <div className="bg-pink-500 flex-grow w-full flex items-center justify-center flex-col group cursor-pointer">
          <div className="grid grid-cols-9 gap-1 my-4 w-full text-center font-extrabold font text-3xl lg:text-6xl sm:text-6xl md:text-4xl">
            {tablets.front.map((e, index) => (
              <div
                className="relative bg-red-800 transform transition ease-in-out shadow-xl shadow-black/40 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] "
                key={index}
              >
                <div>{e}</div>
                <div>
                  <p>{tablets.back[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen justify-center  p-6">
      <header className="bg-fuchsia-300">
        <nav className="flex justify-between mx-auto container ">
          <div className="text-4xl">ようこそ!!!!</div>
          <div className="space-x-11 font-bold text-2xl flex items-end">
            <a
              className="hover:text-green-500 transition-all duration-1000 hover:text-3xl "
              href=""
            >
              前
            </a>
            <a
              className="hover:text-red-500  transition-all duration-1000 hover:text-3xl "
              href=""
            >
              次
            </a>
            <a
              className="hover:text-blue-500  transition-all duration-1000 hover:text-3xl "
              href=""
            >
              ヘルプ
            </a>
          </div>{" "}
        </nav>
      </header>
    </div>
  );
}

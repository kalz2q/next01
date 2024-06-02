export default function Home() {
  return (
    <div
      className="min-h-screen text-4xl 
    font-bold text-gray-700 grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]"
    >
      <div className="bg-cyan-100 pl-2">header</div>
      <div className="bg-rose-100 px-2 row-span-3">navi</div>
      <div className="bg-yellow-100 pl-2">content</div>
      <div className="bg-purple-100 pl-2">footer</div>
    </div>
  );
}

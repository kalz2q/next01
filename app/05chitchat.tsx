export default function Home() {
  return (
    <div className="min-h-screen justify-center  p-6">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <div className="animate-spin  h-12 w-12 bg-red-500 border-4 border-blue-500 rounded-full flex items-center justify-center text-white">
            !!!!
          </div>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

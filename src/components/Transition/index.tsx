export default function Transition() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <button className=" w-20 h-14 text-white transition duration-100 ease-in-out bg-blue-600 hover:bg-fuchsia-300">
          Hover me
        </button>
        <button className=" w-20 h-14 text-white transition-opacity duration-1000 ease-in-out bg-blue-600 hover:opacity-10 hover:bg-fuchsia-300">
          Hover me
        </button>

        <button className=" w-20 h-14 text-white transition-opacity duration-1000 ease-in-out delay-1000 bg-blue-600 hover:opacity-10 hover:bg-fuchsia-300">
          Hover me
        </button>
      </div>
      <span>animate: </span>
      <div className="flex gap-32 text-center">
        <div className="animate-spin h-10 w-20 bg-blue-400">spin</div>
        <div className="animate-ping h-10 w-20 bg-indigo-400">ping</div>

        <div className="animate-pulse h-10 w-20 bg-indigo-400">pulse</div>
        <div className="animate-bounce h-10 w-20 bg-violet-400">bounce</div>
      </div>
    </div>
  );
}

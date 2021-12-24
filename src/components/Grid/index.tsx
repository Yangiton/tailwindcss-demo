export default function Grid() {
  return (
    <div className="flex flex-col gap-10">
      <span>grid-cols-3</span>
      <div className="grid gap-4 grid-cols-3">
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
      </div>

      <span>grid-flow-col</span>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        <div className="w-16 h-16 bg-teal-400">1</div>
        <div className="w-16 h-16 bg-teal-400">2</div>
        <div className="w-16 h-16 bg-teal-400">3</div>
        <div className="w-16 h-16 bg-teal-400">4</div>
        <div className="w-16 h-16 bg-teal-400">5</div>
        <div className="w-16 h-16 bg-teal-400">6</div>
        <div className="w-16 h-16 bg-teal-400">7</div>
        <div className="w-16 h-16 bg-teal-400">8</div>
        <div className="w-16 h-16 bg-teal-400">9</div>
      </div>
    </div>
  );
}

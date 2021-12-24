export default function Sizing() {
  return (
    <div className="flex flex-col gap-8">
      <div className="h-12 w-screen bg-teal-200 dark:bg-purple-200">w-screen</div>
      <div className="h-12 w-full bg-teal-400 dark:bg-purple-400">w-full</div>
      <div className="space-y-1">
        <div className="w-8 h-5 bg-teal-400 dark:bg-purple-400">w-8</div>
        <div className="w-16 h-5 bg-teal-400 dark:bg-purple-400">w-16</div>
        <div className="w-24 h-5 bg-teal-400 dark:bg-purple-400">w-24</div>
        <div className="w-32 h-5 bg-teal-400 dark:bg-purple-400">w-24</div>
        <div className="w-40 h-5 bg-teal-400 dark:bg-purple-400">w-24</div>
      </div>
      <div className="space-y-3">
        <div className="flex">
          <div className="w-1/2 bg-cyan-300 dark:bg-purple-300">w-1/2</div>
          <div className="w-1/2  bg-cyan-600 dark:bg-purple-600">w-1/2</div>
        </div>
        <div className="flex ">
          <div className="w-2/5 bg-cyan-300 dark:bg-purple-300">w-2/5</div>
          <div className="w-3/5 bg-cyan-600 dark:bg-purple-600">w-3/5</div>
        </div>
        <div className="flex ">
          <div className="w-1/3 bg-cyan-300 dark:bg-purple-300">w-1/3</div>
          <div className="w-2/3 bg-cyan-600 dark:bg-purple-600">w-2/3</div>
        </div>
        <div className="flex ">
          <div className="w-1/4 bg-cyan-300 dark:bg-purple-300">w-1/4</div>
          <div className="w-3/4 bg-cyan-600 dark:bg-purple-600">w-3/4</div>
        </div>
        <div className="flex ">
          <div className="w-1/5 bg-cyan-300 dark:bg-purple-300">w-1/5</div>
          <div className="w-4/5 bg-cyan-600 dark:bg-purple-600">w-4/5</div>
        </div>
        <div className="flex ">
          <div className="w-1/6 bg-cyan-300 dark:bg-purple-300">w-1/6</div>
          <div className="w-5/6 bg-cyan-600 dark:bg-purple-600">w-5/6</div>
        </div>
        <div className="w-full bg-cyan-600 dark:bg-purple-600">w-full</div>
      </div>
    </div>
  );
}

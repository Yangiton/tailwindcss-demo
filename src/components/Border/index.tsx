export default function Bg() {
  return (
    <div className="flex flex-col gap-8 dark:text-white">
      <div className="flex gap-4 text-center">
        <div className=" w-40 h-16 bg-indigo-500 rounded-sm">rounded-sm</div>
        <div className=" w-40 h-16 bg-indigo-500 rounded">rounded</div>
        <div className=" w-40 h-16 bg-indigo-500 rounded-lg">rounded-lg</div>
        <div className=" w-40 h-16 bg-indigo-500 rounded-xl">rounded-xl</div>
      </div>

      <div className="flex gap-4">
        <span>rounded-full</span>
        <div className=" w-40 h-16 bg-sky-500 rounded-full"></div>
        <div className=" w-16 h-16 bg-sky-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="rounded-t-3xl w-40 h-16 bg-indigo-500">
          rounded-t-3xl
        </div>
        <div className="rounded-r-3xl w-40 h-16 bg-indigo-500">
          rounded-r-3xl
        </div>
        <div className="rounded-b-3xl w-40 h-16 bg-indigo-500">
          rounded-b-3xl
        </div>
        <div className="rounded-l-3xl w-40 h-16 bg-indigo-500">
          rounded-l-3xl
        </div>
        <div className="rounded-tr-3xl w-40 h-16 bg-indigo-500">
          rounded-tr-3xl
        </div>
        <div className="rounded-br-3xl w-40 h-16 bg-indigo-500">
          rounded-br-3xl
        </div>
        <div className="rounded-bl-3xl w-40 h-16 bg-indigo-500">
          rounded-bl-3xl
        </div>
        <div className="rounded-tl-3xl w-40 h-16 bg-indigo-500">
          rounded-tl-3xl
        </div>
      </div>

      <div className="flex gap-4 text-center">
        <div className="border-solid border-4 border-light-blue-500 w-40 h-16 border-violet-500 bg-purple-300">
          border-solid
        </div>
        <div className="border-dashed border-4 border-light-blue-500 w-40 h-16 border-violet-500 bg-purple-300">
          border-dashed
        </div>
        <div className="border-dotted border-4 border-light-blue-500 w-40 h-16 border-violet-500 bg-purple-300">
          border-dotted
        </div>
        <div className="border-double border-4 border-light-blue-500 w-40 h-16 border-violet-500 bg-purple-300">
          border-double
        </div>
        <div className="border-none border-4 border-light-blue-500 w-40 h-16 border-violet-500 bg-purple-300">
          border-none
        </div>
      </div>

      <div className="flex flex-col gap-4 divide-y-4 divide-purple-400">
        divide-y-4 divide-purple-400
        <div className="grid grid-cols-3 divide-x-4 divide-green-500 text-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="grid grid-cols-3 divide-x-4 divide-green-500 text-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="grid grid-cols-3 divide-x-4 divide-green-500 text-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        divide-x-4 divide-green-500
      </div>

      <div>
        轮廓环&nbsp;&nbsp;
        <button className="focus:ring-4 rounded-xl w-20 h-8 bg-indigo-500">ring-4</button>
      </div>
    </div>
  );
}

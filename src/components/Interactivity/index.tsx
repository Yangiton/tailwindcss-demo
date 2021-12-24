export default function Interactivity() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <select className="border-violet-300 border-4 w-20">
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>

        <select className="appearance-none border-violet-300 border-4 w-20">
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
        <span className="dark:text-white">appearance-none</span>
      </div>

      <div className="flex gap-4">
        <div className=" cursor-pointer w-80 h-12 bg-fuchsia-100">
          cursor-pointer
        </div>
        <div className=" cursor-wait  w-80 h-12 bg-fuchsia-200">
          {" "}
          cursor-wait
        </div>
        <div className=" cursor-text  w-80 h-12 bg-fuchsia-300">
          cursor-text
        </div>
        <div className=" cursor-move  w-80 h-12 bg-fuchsia-400">
          cursor-move
        </div>
        <div className=" cursor-help  w-80 h-12 bg-fuchsia-500">
          cursor-help
        </div>
        <div className=" cursor-not-allowed  w-80 h-12 bg-fuchsia-600">
          cursor-not-allowed
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <textarea
          className="resize border rounded-md"
          defaultValue={"resize"}
        ></textarea>
        <textarea
          className="resize-x border rounded-md"
          defaultValue={"resize-x"}
        ></textarea>
        <textarea
          className="resize-y border rounded-md"
          defaultValue={"resize-y"}
        ></textarea>
      </div>

      <div className="space-y-4">
        <div className="select-none w-40 h-14 bg-fuchsia-200">文本不可选择</div>
        <div className="select-text w-40 h-14 bg-fuchsia-400">文本可选择</div>
        <div className="select-all w-40 h-14 bg-fuchsia-600">
          点击文本全部选中
        </div>
      </div>
    </div>
  );
}

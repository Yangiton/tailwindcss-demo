import { useRef } from "react";
const CONTENT =
  "By default, Tailwind provides three font family utilities: a cross-browser sans-serif stack, a cross-browser serif stack, and a cross-browser monospaced stack. You can change, add, or remove these by editing the theme.fontFamily section of your Tailwind config.";
export default function Typography() {
  const fontSizeRef = useRef<HTMLDivElement>(null);
  const lineHeightRef = useRef<HTMLDivElement>(null);
  const foldDiv = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.style.height === "10rem"
        ? (ref.current.style.height = "100%")
        : (ref.current.style.height = "10rem");
    }
  };
  return (
    <div className="flex flex-col gap-9 dark:text-white ">
      <div className="text-xl dark:text-white">
        <p className="font-sans">
          font-sans: The quick brown fox jumps over the lazy
          dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
        <p className="font-serif">
          font-serif: The quick brown fox jumps over the lazy
          dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
        <p className="font-mono">
          font-mono: The quick brown fox jumps over the lazy
          dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
      </div>

      <div className="dark:text-white overflow-hidden h-40" ref={fontSizeRef}>
        <p
          onClick={() => foldDiv(fontSizeRef)}
          className="cursor-pointer text-amber-700"
        >
          更多
        </p>
        <p className="text-xs">
          <span className=" text-green-500">text-xs: </span>The quick brown fox
        </p>
        <p className="text-sm">
          <span className=" text-green-500">text-sm: </span>The quick brown fox
        </p>
        <p className="text-base">
          <span className=" text-green-500">text-base: </span>The quick brown
          fox
        </p>
        <p className="text-lg">
          <span className=" text-green-500">text-lg: </span>The quick brown fox
        </p>
        <p className="text-xl">
          <span className=" text-green-500">text-xl: </span>The quick brown fox
        </p>
        <p className="text-2xl">
          <span className=" text-green-500">text-2xl: </span>The quick brown fox
        </p>
        <p className="text-3xl">
          <span className=" text-green-500">text-3xl: </span>The quick brown fox
        </p>
        <p className="text-4xl">
          <span className=" text-green-500">text-4xl: </span>The quick brown fox
        </p>
        <p className="text-5xl">
          <span className=" text-green-500">text-5xl: </span>The quick brown fox
        </p>
        <p className="text-6xl">
          <span className=" text-green-500">text-6xl: </span>The quick brown fox
        </p>
        <p className="text-7xl">
          <span className=" text-green-500">text-7xl: </span>The quick brown fox
        </p>
        <p className="text-8xl">
          <span className=" text-green-500">text-8xl: </span>The quick brown fox
        </p>
        <p className="text-9xl">
          <span className=" text-green-500">text-9xl: </span>The quick brown fox
        </p>
      </div>

      <div>
        <p className="italic">
          <span className="not-italic">italic: </span> The quick brown fox jumps
          over the lazy dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
        <p className=" font-thin">
          <span className="text-purple-600">font-weight: 100 </span> The quick
          brown fox jumps over the lazy
          dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
        <p className=" font-medium">
          <span className="text-purple-600">font-weight: 500 </span> The quick
          brown fox jumps over the lazy
          dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
        <p className=" font-black">
          <span className="text-purple-600">font-weight: 900 </span> The quick
          brown fox jumps over the lazy
          dog.一去二三里烟村四五家亭台六七座八九十支花
        </p>
      </div>

      <div>
        <p className="-tracking-widest">
          <span className="text-indigo-600 tracking-normal">
            -tracking-widest:
          </span>
          The quick brown fox
        </p>
        <p className="tracking-tighter">
          <span className="text-indigo-600 tracking-normal">
            tracking-tighter:
          </span>
          The quick brown fox
        </p>
        <p className="tracking-normal">
          <span className="text-indigo-600 tracking-normal">
            tracking-normal:
          </span>
          The quick brown fox
        </p>
        <p className="tracking-widest">
          <span className="text-indigo-600 tracking-normal">
            tracking-widest:
          </span>
          The quick brown fox
        </p>
        <br />
        <p
          onClick={() => foldDiv(lineHeightRef)}
          className="cursor-pointer text-amber-700"
        >
          更多
        </p>
        <div className="space-y-2 overflow-hidden h-40" ref={lineHeightRef}>
          <p className="leading-none w-3/5 border-2 border-cyan-500">
            <span className="text-indigo-600">leading-none: </span>
            {CONTENT}
          </p>
          <p className="leading-tight w-3/5 border-2 border-cyan-500">
            <span className="text-indigo-600">leading-tight: </span>
            {CONTENT}
          </p>
          <p className="leading-snug w-3/5 border-2 border-cyan-500">
            <span className="text-indigo-600">leading-snug: </span>
            {CONTENT}
          </p>
          <p className="leading-normal w-3/5 border-2 border-cyan-500">
            <span className="text-indigo-600">leading-normal: </span>
            {CONTENT}
          </p>
          <p className="leading-relaxed w-3/5 border-2 border-cyan-500">
            <span className="text-indigo-600">leading-relaxed: </span>
            {CONTENT}
          </p>
          <p className="leading-loose w-3/5 border-2 border-cyan-500">
            <span className="text-indigo-600">leading-loose </span>
            {CONTENT}
          </p>
        </div>
      </div>

      <div>
        <ul className="list-disc">
          <li className="text-purple-600">list-disc</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        </ul>

        <ol className="list-decimal">
          <li className="text-purple-600">list-decimal</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        </ol>

        <ul className="list-none">
          <li className="text-purple-600">{"list-none(default)"}</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        </ul>
      </div>

      <div>
      </div>
    </div>
  );
}

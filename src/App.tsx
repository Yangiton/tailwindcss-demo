import { useState } from "react";
import { Spacing, Sizing, Typography, Background, Border, Interactivity, Transition, Transform, Flex, Grid } from "./components/index";
const defaultTabs = [
  "间距",
  "尺寸",
  "排版",
  "背景",
  "边框",
  "交互",
  "过度",
  "转换",
  "Flex",
  "Grid",
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeDarkMode = () => {
    setIsDarkMode((pre) => !pre);
  };

  const [activeTab, setActiveTab] = useState(0);
  const changeTab = (index: number) => {
    setActiveTab(index);
  };
  const switchItem = (index: number) => {
    switch (index) {
      case 0:
        return <Spacing />;
      case 1:
        return <Sizing />;
      case 2:
        return <Typography />;
      case 3:
        return <Background />;
      case 4: 
        return <Border />;
      case 5:
        return <Interactivity />;
      case 6:
        return <Transition />;
      case 7:
        return <Transform />;
      case 8:
        return <Flex />;
      case 9:
        return <Grid />;
      default:
        return null;
    }
  };
  return (
    <div className={isDarkMode ? "dark" : "none"} id="darkDIV">
      <div className={(activeTab === 2 || activeTab === 3) ? "dark:bg-gray-700 px-8 h-auto" : "dark:bg-gray-700 px-8 h-full"}>
        <div className="h-20 flex items-center gap-1 dark:bg-gray-700">
          <span
            className=" dark:text-blue-500 cursor-pointer"
            onClick={changeDarkMode}
          >
            {isDarkMode ? "暗黑模式" : "普通模式"}
          </span>
          {isDarkMode ? (
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="transition-colors duration-200 text-gray-900 cursor-pointer"
              onClick={changeDarkMode}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
              ></path>
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              fill="none"
              className="cursor-pointer"
              onClick={changeDarkMode}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z"
                fill="url(#paint0_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="2"
                  y1="2"
                  x2="30"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    className="transition-all duration-200"
                    stopColor="#FACC15"
                  ></stop>
                  <stop
                    className="transition-all duration-200"
                    offset="1"
                    stopColor="#FA9D16"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        <ul className="flex gap-3 cursor-pointer text-white dark:text-black">
          {defaultTabs.map((name, index) => {
            return (
              <li
                key={index}
                className={
                  activeTab === index
                    ? "bg-cyan-500 dark:bg-lime-400 px-2 py-1 rounded-md animate-bounce"
                    : "bg-cyan-500 dark:bg-lime-400 px-2 py-1 rounded-md"
                }
                onClick={() => changeTab(index)}
              >
                {name}
              </li>
            );
          })}
        </ul>
        <div className="mt-10 h-auto">{switchItem(activeTab)}</div>
      </div>
    </div>
  );
}

export default App;

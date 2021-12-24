export default function Background() {
  return (
    <div className="flex flex-col gap-4 dark:text-white">
      <div>
        <span>背景图片</span>
        <div className="w-2/3 h-80 bg-bg-image"></div>
        <span>固定背景 bg-fixed</span>
        <div className="w-2/3 h-80 bg-bg-image bg-fixed bg-auto"></div>
        <span>bg-cover</span>
        <div className="w-2/3 h-80 bg-bg-image bg-cover"></div>
      </div>

      <span>图片位置</span>
      <div className="grid grid-cols-3 gap-4 w-1/2">
        <div className="bg-no-repeat bg-left-top bg-dog-bg bg-sm-bg w-24 h-24 border-2">bg-left-top</div>
        <div className="bg-no-repeat bg-top bg-dog-bg bg-sm-bg w-24 h-24 border-2"></div>
        <div className="bg-no-repeat bg-right-top bg-dog-bg bg-sm-bg w-24 h-24 border-2"></div>
        <div className="bg-no-repeat bg-left bg-dog-bg bg-sm-bg w-24 h-24 border-2"></div>
        <div className="bg-no-repeat bg-center bg-dog-bg bg-sm-bg w-24 h-24 border-2">bg-center</div>
        <div className="bg-no-repeat bg-right bg-dog-bg bg-sm-bg w-24 h-24 border-2"></div>
        <div className="bg-no-repeat bg-left-bottom bg-dog-bg bg-sm-bg w-24 h-24 border-2"></div>
        <div className="bg-no-repeat bg-bottom bg-dog-bg bg-sm-bg w-24 h-24 border-2"></div>
        <div className="bg-no-repeat bg-right-bottom bg-dog-bg bg-sm-bg w-24 h-24 border-2">bg-right-bottom</div>
      </div>

      <div>
        <p>渐变色 from-green-400 via-cyan-500 to-blue-500</p>
        <p>hover: from-pink-500 to-yellow-500</p>
        <div className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 w-3/5 h-40 hover:from-pink-500 hover:to-yellow-500"></div>
      </div>

      <div>
        <span>背景透明度</span>
        <div className="bg-indigo-600 bg-opacity-100 w-15 h-10">
          bg-opacity-100
        </div>
        <div className="bg-indigo-600 bg-opacity-75 w-15 h-10">
          bg-opacity-75
        </div>
        <div className="bg-indigo-600 bg-opacity-50 w-15 h-10">
          bg-opacity-50
        </div>
        <div className="bg-indigo-600 bg-opacity-25 w-15 h-10">
          bg-opacity-25
        </div>
        <div className="bg-indigo-600 bg-opacity-0 w-15 h-10">bg-opacity-0</div>
      </div>
    </div>
  );
}

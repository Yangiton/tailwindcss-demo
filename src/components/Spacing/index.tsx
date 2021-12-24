
export default function Spacing() {
  return (
    <div className="flex flex-col space-y-5">
      <span className=" dark:text-white">{"父盒子 pt-10 => padding-top: 2.5rem"}</span>
      <div className=" bg-teal-500 w-52 h-52 flex items-center justify-center pt-10">
        <div className=" bg-amber-400 w-36 h-36 mb-20">
          <span>{"子盒子 mb-20 => margin-bottom: 5rem"}</span>
        </div>
      </div>
      <ul className="flex space-x-5">
        <li>
          <div className="w-32 h-40 bg-fuchsia-200">参照盒子</div>
          <div className="-mt-8 w-32 h-40 bg-lime-800 opacity-75">
            {"-mt-8 => margin-top: -2rem"}
          </div>
        </li>
        <li>
          <div className="w-32 h-40 bg-fuchsia-400">参照盒子</div>
          <div className="-mt-12 w-32 h-40 bg-lime-600 opacity-75">
            {"-mt-16 => margin-top: -4rem"}
          </div>
        </li>
        <li>
          <div className="w-32 h-40 bg-fuchsia-600">参照盒子</div>
          <div className="-mt-20 w-32 h-40 bg-lime-400 opacity-75">
            {"-mt-32 => margin-top: -8rem"}
          </div>
        </li>
        <li>
          <div className="w-32 h-40 bg-fuchsia-800">参照盒子</div>
          <div className="-mt-64 w-32 h-40 bg-lime-200 opacity-75">
            {"-mt-64 => margin-top: -16rem"}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default function Transform() {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex gap-10 text-center">
        <div className="w-24 h-24 bg-teal-500">
          <div className="transform rotate-45 bg-purple-300 w-24 h-24">
            rotate
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className="transform skew-y-12 bg-purple-300 w-24 h-24">
            skew
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className="transform scale-50 bg-purple-300 w-24 h-24">
            scale
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className="transform translate-x-4 translate-y-4 bg-purple-300 w-24 h-24">
            translate
          </div>
        </div>
      </div>

      <div className="flex gap-20">
        <div className="w-24 h-24 bg-teal-500">
          <div className="origin-top-left transform rotate-45 bg-purple-300 w-24 h-24">
            origin-top-left
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className=" origin-top-right transform rotate-45 bg-purple-300 w-24 h-24">
            origin-top-right
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className=" origin-center transform rotate-45 bg-purple-300 w-24 h-24">
            origin-center
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className=" origin-bottom-right transform rotate-45 bg-purple-300 w-24 h-24">
            origin-bottom-right
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-500">
          <div className=" origin-bottom-left transform rotate-45 bg-purple-300 w-24 h-24">
            origin-bottom-left
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Flex() {
  return (
    <div className="flex flex-col gap-10">
      <span>flex gap-4</span>
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
        <div className="w-16 h-16 bg-teal-400"></div>
      </div>
      <span>order</span>
      <div className="flex gap-4 text-center">
        <div className="w-16 h-16 bg-teal-400 order-2">1 <span>order-2</span></div>
        <div className="w-16 h-16 bg-teal-400">2</div>
        <div className="w-16 h-16 bg-teal-400">3</div>
        <div className="w-16 h-16 bg-teal-400 order-3">4 <span>order-3</span></div>
        <div className="w-16 h-16 bg-teal-400">5</div>
      </div>
    </div>
  )
}
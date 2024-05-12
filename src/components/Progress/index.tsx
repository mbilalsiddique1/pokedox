export const Progress = ({ name, stat, type }: { name: string, stat: number, type: string }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-1/6 text-right uppercase">{name}</div>
      <div className="w-5/6 bg-gray-white rounded-full h-2">
        <div className={`bg-${type} h-2 rounded-full max-w-full`} style={{ width: `${stat}%` }}></div>
      </div>
    </div>
  )
}

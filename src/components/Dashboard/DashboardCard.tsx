
interface DashboardProp{
    text:string
    value:number,
    color:string
}

const DashboardCard = ({text,value,color}:DashboardProp) => {
  return (
    <div className="border-r-7 h-[100px] rounded-md shadow-lg p-3 flex flex-col justify-center items-center" style={{
        borderColor:color
    }}>
      <h3 className="text-2xl" style={{color:color}}>{text}</h3>
      <h3 className="font-bold text-xl p-3" style={{color:color}}>{value}</h3>
    </div>
  )
}

export default DashboardCard

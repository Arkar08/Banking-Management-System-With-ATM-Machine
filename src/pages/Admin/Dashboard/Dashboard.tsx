import DashboardCard from "@/components/Dashboard/DashboardCard"

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 mt-5">
         <DashboardCard text="UserList" value={4} color="green"/>
         <DashboardCard text="Account" value={5} color="blue"/>
         <DashboardCard text="Branch" value={6} color="orange"/>
         <DashboardCard text="Transaction" value={7} color="purple"/>
      </div>
    </div>
  )
}

export default Dashboard

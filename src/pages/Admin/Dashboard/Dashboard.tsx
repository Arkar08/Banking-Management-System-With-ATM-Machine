import DashboardCard from "@/components/Dashboard/DashboardCard"
import { useAccount } from "@/hooks/useAccount"
import { useBranch } from "@/hooks/useBranch";
import { useTransaction } from "@/hooks/useTransaction";
import { useUser } from "@/hooks/useUser";

const Dashboard = () => {

  const {queryAccount} = useAccount()
  const {data:account} = queryAccount;
  const {queryUser} = useUser()
  const {data:user} = queryUser;
  const {queryBranch} = useBranch()
  const {data:branch} = queryBranch;
  const {queryTransaction} = useTransaction()
  const {data:transaction} = queryTransaction;

  return (
    <div>
      <div className="grid grid-cols-4 gap-10 mt-5">
         <DashboardCard text="UserList" value={user?.length} color="green"/>
         <DashboardCard text="Account" value={account?.length} color="blue"/>
         <DashboardCard text="Branch" value={branch?.length} color="orange"/>
         <DashboardCard text="Transaction" value={transaction?.length} color="purple"/>
      </div>
    </div>
  )
}

export default Dashboard

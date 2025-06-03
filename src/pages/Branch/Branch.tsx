import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table } from "@/components/ui/table"
import type { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const Branch = () => {

      const branchData = ["Branch Name","Branch Location","Created At"];
      const navigate = useNavigate()

      const branchChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event?.target.value,'branch change')
      }

      const createBranch = () => {
        navigate("/branch/create")
      }

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Branch" btnText="Create" headerText="Branch" onchange={branchChange} create={createBranch}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={branchData}/>
        </Table>
      </div>
      <div className="w-[100%] shadow-lg p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Branch

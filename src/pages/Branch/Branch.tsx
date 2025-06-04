import BranchTableBody from "@/components/Branch/BranchTableBody"
import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import { branchDummy } from "@/utils/dummy"
import type { BranchTable } from "@/utils/type"
import type { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const Branch = () => {

      const branchData = ["Branch Name","Branch Location","Created At","Action"];
      const navigate = useNavigate()

      const branchChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event?.target.value,'branch change')
      }

      const createBranch = () => {
        navigate("/branch/create")
      }

      const filterBranch = () => {
        console.log("filter branch")
      }

      const updateBranch = (id:string) => {
        navigate(`/branch/${id}`)
      }

      const deleteBranch = (id:string) => {
        console.log("delete Branch",id)
      }

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Branch" btnText="Create" headerText="Branch" onchange={branchChange} create={createBranch} filter={filterBranch}/>
      <div className="mt-3 overflow-auto rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={branchData}/>
          <TableBody>
            {
              branchDummy.map((branch:BranchTable)=>{
                return (
                  <BranchTableBody branch={branch} updateBranch={updateBranch} deleteBranch={deleteBranch}/>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
      <div className="w-[100%] shadow-lg p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Branch

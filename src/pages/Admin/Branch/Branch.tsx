import BranchTableBody from "@/components/Branch/BranchTableBody"
import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import { useBranch } from "@/hooks/useBranch"
import { errorToastStyle } from "@/utils/toast"
// import { branchDummy } from "@/utils/dummy"
import type { BranchTable } from "@/utils/type"
import { useEffect, useState, type ChangeEvent } from "react"
import { toast } from "sonner"

const Branch = () => {

      const branchData = ["Branch Name","Branch Location","Created At","Action"];
      const {queryBranch} = useBranch()
      const {isSuccess,isError,error,isFetching,data:branch} = queryBranch;
      const [branchList,setBranchList] = useState<BranchTable[]>([])
      const [searchBranch,setSearchBranch] = useState("")

      useEffect(()=>{
        if(isSuccess && branch){
          setSearchBranch("")
          setBranchList(branch)
        }
      },[isSuccess,branch])

      const branchChange = (event:ChangeEvent<HTMLInputElement>) => {
        const inputValues = event.target.value;
        setSearchBranch(inputValues)
        if(inputValues !== ''){
          const filter = branch.filter((data:BranchTable)=>{
            return (
              data.branchName.toString().toLowerCase().includes(inputValues.toString().toLowerCase()) || data.branchLocation.toString().toLowerCase().includes(inputValues.toString().toLowerCase())
            )
          })
          setBranchList(filter)
        }else{
          setBranchList(branch)
        }
      }


      const filterBranch = () => {
        console.log("filter branch")
      }

      const deleteBranch = (id:string) => {
        console.log("delete Branch",id)
      }

      if(isError){
        toast(error.message,errorToastStyle)
      }

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Branch" search={searchBranch} headerText="Branch" onchange={branchChange} filter={filterBranch} btnText="branch"/>
      <div className="mt-3 overflow-auto rounded-md shadow-lg h-[calc(100vh-220px)] px-4">
        <Table>
          <TableHeaders dummyData={branchData}/>
          <TableBody>
            {
              branchList.map((branch:BranchTable,index)=>{
                return (
                  <BranchTableBody branch={branch} deleteBranch={deleteBranch} key={index}/>
                )
              })
            }
          </TableBody>
        </Table>
        {
          isFetching && (
            <div>
              <h3 className="text-center text-2xl">Loading...</h3>
            </div>
          )
        }
        {
          branchList.length === 0 && !isFetching && (
            <div>
              <h3 className="text-center text-2xl">No Branch Found</h3>
            </div>
          )
        }
      </div>
      <div className="w-[100%] mt-2 shadow-lg p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Branch

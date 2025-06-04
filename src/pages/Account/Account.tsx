import AccounTableBody from "@/components/Account/AccounTableBody"
import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import { accountDummy } from "@/utils/dummy"
import type { AccountTable } from "@/utils/type"
import type { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const Account = () => {
    const userData = ["Account Number","Customer Name","Account Type","Balance","Status","Created At","Action"]
    const navigate = useNavigate()

    const userChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event?.target.value,'user change')
    }

    const filterAccount = () => {
        console.log('filterAccount')
    }

    const viewAccount = (id:string) => {
      navigate(`/account/${id}`)
    }


  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Account" btnText="Filter" headerText="Account Listings" onchange={userChange} filter={filterAccount}/>
      <div className="mt-3  overflow-auto rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={userData}/>
          <TableBody>
            {
              accountDummy.map((account:AccountTable) => {
                return (
                  <AccounTableBody account={account} viewAccount={viewAccount}/>
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

export default Account

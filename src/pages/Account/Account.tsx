import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table } from "@/components/ui/table"
import type { ChangeEvent } from "react"

const Account = () => {
    const userData = ["Account Number","Customer Name","Balance","Account Type","Status","Created At"]

    const userChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event?.target.value,'user change')
    }

    const filterAccount = () => {
        console.log('filterAccount')
    }


  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Account" btnText="Filter" headerText="Account Listings" onchange={userChange} create={filterAccount}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={userData}/>
        </Table>
      </div>
      <div className="w-[100%] shadow-lg p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Account

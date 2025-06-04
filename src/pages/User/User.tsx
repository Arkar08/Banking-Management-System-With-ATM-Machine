import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import UserTableBody from "@/components/User/UserTableBody"
import { userDummy } from "@/utils/dummy"
import type { UserTable } from "@/utils/type"
import type { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const User = () => {

  const userData = ["Name","Email","Phone Number","Role","Branch Name","Address","Created At","Action"]
  const navigate = useNavigate()

  const userChange = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value,'user change')
  }

  const createUser = () => {
    navigate("/user/create")
  }

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search UserListing" btnText="Create" headerText="User Listings" onchange={userChange} create={createUser}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={userData}/>
          <TableBody>
            {
              userDummy.map((user:UserTable)=>{
                return (
                  <UserTableBody user={user}/>
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

export default User

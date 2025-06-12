import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import UserTableBody from "@/components/User/UserTableBody"
import { useUser } from "@/hooks/useUser"
// import { userDummy } from "@/utils/dummy"
import type { UserTable } from "@/utils/type"
import { useEffect, useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const User = () => {

  const userData = ["Profile Image","Name","Email","Phone Number","Card No","Role","Branch Name","Address","Created At","Action"]
  const navigate = useNavigate()
  const [filterUsers,setFilterUsers] = useState<UserTable[]>([])
  const {queryUser} = useUser()
  const {data:users,isSuccess,isFetching,isError,error} = queryUser;
  const [searchUser,setSearchUser] = useState('')

  useEffect(()=>{
    if(isSuccess && users){
      setSearchUser("")
      setFilterUsers(users)
    }
  },[isSuccess, users])

  const userChange = (event:ChangeEvent<HTMLInputElement>) => {
    const inputValues = event.target.value;
    setSearchUser(inputValues)
    if(inputValues !== ''){
      const filter = users.filter((user:UserTable)=> {
          return( user.name.toString().toLowerCase().includes(inputValues.toString().toLowerCase()) || user.role.toString().toLowerCase().includes(inputValues.toString().toLowerCase()));
      })
      setFilterUsers(filter)
    }else{
      setFilterUsers(users)
    }
  }

  const createUser = () => {
    navigate("/user/create")
  }

  const filterUser = () => {
    console.log("filter user")
  }

  const updateUser = (id:string) => {
    navigate(`/user/${id}`)
  }

  const deleteUser = (id:string) => {
    console.log("delete user",id)
  }

  if(isError){
    console.log(error)
  }


  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search UserListing" btnText="Create" headerText="User Listings" onchange={userChange} create={createUser} filter={filterUser} search={searchUser}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)] overflow-auto px-4">
        <Table>
          <TableHeaders dummyData={userData}/>
          <TableBody>
            {
              filterUsers.map((user:UserTable,index)=>{
                return (
                  <UserTableBody user={user} updateUser={updateUser} deleteUser={deleteUser} key={index}/>
                )
              })
            }
          </TableBody>
        </Table>
        {
          isFetching && (
              <div>
                <h3 className="text-2xl text-center">Loading...</h3>
              </div>
          )
        }
        {
          filterUsers.length === 0 && !isFetching && (
            <div>
              <h3 className="text-2xl text-center">No User Found.</h3>
            </div>
          )
        }
      </div>
      <div className="w-[100%] shadow-lg p-4 mt-2 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default User

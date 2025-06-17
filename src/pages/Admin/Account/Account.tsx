import AccounTableBody from "@/components/Account/AccounTableBody"
import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import { useAccount } from "@/hooks/useAccount"
import { errorToastStyle, successToastStyle } from "@/utils/toast"
import type { AccountTable } from "@/utils/type"
import {useEffect, useState, type ChangeEvent } from "react"
import { toast } from "sonner"

const Account = () => {
    const userData = ["Account Number","QR Code","Customer Name","Account Type","Balance","Status","Created At","Action"]
    const {queryAccount,updateAccount} = useAccount()
    const {data:account,isFetching,isError,error,isSuccess} = queryAccount;
    const [filterList,setFilterList] = useState<AccountTable[]>([])
    const [searchAccount,setSearchAcccount] = useState('')

    useEffect(()=>{
      if(isSuccess && account){
        setSearchAcccount("")
        setFilterList(account)
      }
    },[account,isSuccess])

    const userChange = (event:ChangeEvent<HTMLInputElement>) => {
        const inputValues = event.target.value;
        setSearchAcccount(inputValues)
        if(inputValues !== ''){
          const filter = account.filter((acc:AccountTable)=>{
              return (
                acc.accountNo.toString().includes(inputValues.toString()) || acc.customerName.toString().toLowerCase().includes(inputValues.toString().toLowerCase()) || acc.accountType.toString().toLowerCase().includes(inputValues.toString().toLowerCase())
              )
          })
          setFilterList(filter)
        }else{
          setFilterList(account)
        }
    }

    const filterAccount = () => {
        console.log('filterAccount')
    }


    if(isError){
      toast(error.message,errorToastStyle)
    }


  const toggleAccount = async(id:string,status:string) => {

    const statusList = status === 'Active'?'Inactive':"Active"

    const data = {
      _id:id,
      status:statusList
    }

    try {
        const res = await updateAccount.mutateAsync(data)
          if(res.message === 'Update Account Successfully.'){
            toast(`${res.message}`,successToastStyle)
          }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        toast(`${error.response.data.message}`,errorToastStyle)
      }

    }

    // if(status === 'Active'){
    //   const data = {
    //     _id:id,
    //     status:"Inactive"
    //   }
       
    // }else{
    //   const data = {
    //     _id:id,
    //     status:"Active"
    //   }
    //    try {
    //     const res = await updateAccount.mutateAsync(data)
    //       if(res.message === 'Update Account Successfully.'){
    //         toast(`${res.message}`,successToastStyle)
    //       }
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (error:any) {
    //     toast(`${error.response.data.message}`,errorToastStyle)
    //   }
    // }
   

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Account" btnText="Filter" headerText="Account Listings" onchange={userChange} filter={filterAccount} search={searchAccount}/>
      <div className="mt-3  overflow-auto rounded-md shadow-lg h-[calc(100vh-220px)] px-4">
        <Table>
          <TableHeaders dummyData={userData}/>
          <TableBody>
            {
              filterList.map((account:AccountTable,index) => {
                return (
                  <AccounTableBody account={account}  key={index} toggleAccount={toggleAccount}/>
                )
              })
            }
          </TableBody>
        </Table>
        {
          isFetching && (
              <div>
                <h3 className="text-3xl text-center">Loading...</h3>
              </div>
          )
        }
        {
          filterList.length === 0 && !isFetching && (
            <div>
              <h3 className="text-2xl text-center">No User Found.</h3>
            </div>
          )
        }
      </div>
      <div className="w-[100%] shadow-lg mt-2 p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Account

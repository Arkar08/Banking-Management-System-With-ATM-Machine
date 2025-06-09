import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import TransactionBody from "@/components/Transaction/TransactionBody"
import { Table, TableBody } from "@/components/ui/table"
import { useTransaction } from "@/hooks/useTransaction"
// import { transactionDummy } from "@/utils/dummy"
import type { TransactionTable } from "@/utils/type"
import { useEffect, useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"


const TransactionAgent = () => {

      const transactionData = ["TransactionNo","From Customer Name","To Customer Name","Transaction Type","Transaction Time","Amount","Status","Created At","Action"]
      const navigate = useNavigate();
      const {queryTransaction} = useTransaction()
      const {data:transaction,isSuccess,isFetching,isError,error} = queryTransaction;
      const [allTransaction,setAllTransaction] = useState<TransactionTable[]>([])
      const [searchTransaction,setSearchTransaction] = useState('')
  
      useEffect(()=>{
        if(isSuccess && transaction){
          setSearchTransaction('')
          setAllTransaction(transaction)
        }
      },[isSuccess,transaction])
    
  
      const transactionChange = (event:ChangeEvent<HTMLInputElement>) => {
        const inputValues = event.target.value;
        setSearchTransaction(inputValues)
        if(inputValues !== ''){
          const transactionList = transaction.filter((tran:TransactionTable)=>{
            return (
              tran.fromCustomerName.toString().toLowerCase().includes(inputValues.toString().toLowerCase()) || tran.toCustomerName.toString().toLowerCase().includes(inputValues.toString().toLowerCase())
            )
          })
          setAllTransaction(transactionList)
        }else{
          setAllTransaction(transaction)
        }
      }
  
      const filterTransaction = () => {
          console.log('filterTransaction')
      }
  
      const viewTransaction = (id:string) => {
        navigate(`/transaction/${id}`)
      }
  
      if(isError){
        console.log(error)
      }
  

  return (
        <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Transactions" btnText="Filter" headerText="Transactions" onchange={transactionChange} filter={filterTransaction} search={searchTransaction}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)] overflow-auto px-4">
        <Table>
          <TableHeaders dummyData={transactionData}/>
          <TableBody>
            {
              allTransaction.map((transaction:TransactionTable,index) => {
                return (
                  <TransactionBody transaction={transaction} viewTransaction={viewTransaction} key={index}/>
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
          allTransaction.length === 0 && !isFetching && (
            <div>
              <h3 className="text-2xl text-center">No Transaction Found.</h3>
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

export default TransactionAgent

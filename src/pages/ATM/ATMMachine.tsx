import ATMTableBody from "@/components/ATM/ATMTableBody"
import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table, TableBody } from "@/components/ui/table"
import { atmDummy } from "@/utils/dummy"
import type { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"


const ATMMachine = () => {

  const atmData = ["ATM Name","ATM Branch Name","Amount","ATM Limit","ATM Location","Created At","Action"]
  const navigate = useNavigate();

   const atmChange = (event:ChangeEvent<HTMLInputElement>) => {
          console.log(event?.target.value,'atm change')
    }

    const createAtm = () => {
      navigate("/atm/create")
    }

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search ATMMachine" btnText="Create" headerText="ATM Machine" onchange={atmChange} create={createAtm}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={atmData}/>
          <TableBody>
              {
                atmDummy.map((atm)=>{
                  return (
                    <ATMTableBody atm={atm}/>
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

export default ATMMachine

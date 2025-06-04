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

    const filterAtm = () => {
      console.log('filter atm')
    }

    const updateAtm = (id:string) => {
      navigate(`/atm/${id}`)
    }

    const deleteAtm = (id:string) => {
      console.log("delete atm ",id)
    }

  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search ATMMachine" btnText="Create" headerText="ATM Machine" onchange={atmChange} create={createAtm} filter={filterAtm}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)] overflow-auto">
        <Table>
          <TableHeaders dummyData={atmData}/>
          <TableBody>
              {
                atmDummy.map((atm)=>{
                  return (
                    <ATMTableBody atm={atm} updateAtm={updateAtm} deleteAtm={deleteAtm}/>
                  )
                })
              }
          </TableBody>
        </Table>
      </div>
      <div className="w-[100%] shadow-lg mt-2 p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default ATMMachine

import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface tableHeaderProps {
  dummyData:string[]
}


const TableHeaders = ({dummyData}:tableHeaderProps) => {
  return (
    <TableHeader>
        <TableRow>
            {
              dummyData.map((data)=>{
                return(
                  <TableHead key={data} className="w-[100px]">{data}</TableHead>
                )
              })
            }
        </TableRow>
    </TableHeader>
  )
}

export default TableHeaders

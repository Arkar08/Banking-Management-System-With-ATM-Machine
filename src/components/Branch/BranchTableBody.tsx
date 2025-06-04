import type { BranchTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"
import {Edit, Trash } from "lucide-react"
import { Button } from "../ui/button"
import moment from "moment";

interface branchProp {
  branch:BranchTable,
  updateBranch:(id:string) => void;
  deleteBranch:(id:string) => void;
}

const BranchTableBody = ({branch,updateBranch,deleteBranch}:branchProp) => {
  return (
    <TableRow key={branch.id}>
        <TableCell className="text-center">{branch.branchName} Branch</TableCell>
        <TableCell className="text-center">{branch.branchLocation}</TableCell>
        <TableCell className="text-center">{moment(branch.createdAt).format('LLL')}</TableCell>
        <TableCell className="flex gap-3 items-center justify-center">
            <Button className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500" onClick={()=>updateBranch(branch.id)}>
                <Edit />
            </Button>
            <Button className="bg-red-600 h-8 w-8 cursor-pointer hover:bg-red-500" onClick={()=>deleteBranch(branch.id)}>
                <Trash />
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default BranchTableBody

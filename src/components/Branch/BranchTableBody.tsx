import type { BranchTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"


interface branchProp {
  branch:BranchTable
}

const BranchTableBody = ({branch}:branchProp) => {
  return (
    <TableRow>
        <TableCell className="text-center">{branch.branchName} Branch</TableCell>
        <TableCell className="text-center">{branch.branchLocation}</TableCell>
        <TableCell className="text-center">{branch.createdAt}</TableCell>
        <TableCell className="text-center">Edit</TableCell>
    </TableRow>
  )
}

export default BranchTableBody

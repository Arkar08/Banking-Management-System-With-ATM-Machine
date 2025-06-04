import type { UserTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"


interface UserProps{
    user:UserTable
}

const UserTableBody = ({user}:UserProps) => {
  return (
    <TableRow>
        <TableCell className="text-center">
            {user.name}
        </TableCell>
        <TableCell className="text-center">
            {user.email}
        </TableCell>
        <TableCell className="text-center">
            {user.phoneNumber}
        </TableCell>
        <TableCell className="text-center">
            {user.role}
        </TableCell>
        <TableCell className="text-center">
            {user.branchName}
        </TableCell>
        <TableCell className="text-center">
            {user.address}
        </TableCell>
        <TableCell className="text-center">
            {user.createdAt}
        </TableCell>
        <TableCell className="text-center">
            Edit
        </TableCell>
    </TableRow>
  )
}

export default UserTableBody

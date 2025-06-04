import type { UserTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import {Edit, Trash } from "lucide-react"
import moment from "moment";


interface UserProps{
    user:UserTable,
    updateUser:(id:string) => void;
    deleteUser:(id:string) => void;
}

const UserTableBody = ({user,updateUser,deleteUser}:UserProps) => {
  return (
    <TableRow key={user.id}>
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
            {moment(user.createdAt).format('LLL')}
        </TableCell>
        <TableCell className="flex gap-3 items-center justify-center">
            <Button className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500" onClick={()=>updateUser(user.id)}>
                <Edit />
            </Button>
            <Button className="bg-red-600 h-8 w-8 cursor-pointer hover:bg-red-500" onClick={()=> deleteUser(user.id)}>
                <Trash />
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default UserTableBody

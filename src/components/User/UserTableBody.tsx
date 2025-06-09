import type { UserTable } from "@/utils/type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Edit, Trash } from "lucide-react";
import moment from "moment";

interface UserProps {
  user: UserTable;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const UserTableBody = ({
  user,
  updateUser,
  deleteUser,
}: UserProps) => {
  return (
    <>
     
        <TableRow key={user._id}>
          <TableCell>
            <div className="w-[60px] h-[60px] rounded-full">
              <img src="./image.jpg" alt="profile_img" className="w-full h-full rounded-full"/>
            </div>
          </TableCell>
          <TableCell  className="capitalize">{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phoneNumber}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell className="pl-8">{user.branch}</TableCell>
          <TableCell className="pl-8">{user.address || "_"}</TableCell>
          <TableCell>
            {moment(user.createdAt).format("LLL")}
          </TableCell>
          <TableCell className="flex gap-3 mt-3">
            <Button
              className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500"
              onClick={() => updateUser(user._id)}
            >
              <Edit />
            </Button>
            <Button
              className="bg-red-600 h-8 w-8 cursor-pointer hover:bg-red-500"
              onClick={() => deleteUser(user._id)}
            >
              <Trash />
            </Button>
          </TableCell>
        </TableRow>
    </>
  );
};

export default UserTableBody;

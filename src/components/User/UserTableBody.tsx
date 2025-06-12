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

  const image = user.profile ? user.profile : ''
  const branch = user.branch === 'Unknown' ? '-' : user.branch +" "+'Branch'

  return (
    <>
        <TableRow key={user._id}>
          <TableCell>
            <div className="w-[60px] h-[60px] rounded-full">
              <img src={image} alt="profile_img" className="w-full h-full rounded-full object-cover"/>
            </div>
          </TableCell>
          <TableCell  className="capitalize">{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phoneNumber}</TableCell>
          <TableCell>{user.cardNo.cardNo}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell className={user.branch === 'Unknown' ? 'pl-[50px] text-2xl':''}>{branch}</TableCell>
          <TableCell className={!user.address? 'pl-[20px] text-2xl':'capitalize'}>{user.address || "-"}</TableCell>
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

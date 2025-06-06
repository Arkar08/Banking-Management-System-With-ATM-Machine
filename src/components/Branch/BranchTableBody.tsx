import type { BranchTable } from "@/utils/type";
import { TableCell, TableRow } from "../ui/table";
import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import moment from "moment";
import UpdateBranch from "@/pages/Branch/UpdateBranch";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { useState } from "react";

interface branchProp {
  branch: BranchTable;
  deleteBranch: (id: string) => void;
}

const BranchTableBody = ({ branch, deleteBranch }: branchProp) => {
  const [branchId, setBranchId] = useState("");

  const editBtn = (id: string) => {
    setBranchId(id);
  };

  return (
    <TableRow key={branch._id}>
      <TableCell>{branch.branchName} Branch</TableCell>
      <TableCell>{branch.branchLocation}</TableCell>
      <TableCell>{moment(branch.createdAt).format("LLL")}</TableCell>
      <TableCell className="flex gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={() => editBtn(branch._id)}
              className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500"
            >
              <Edit />
            </Button>
          </DialogTrigger>
          <UpdateBranch branchId={branchId} />
        </Dialog>
        <Button
          className="bg-red-600 h-8 w-8 cursor-pointer hover:bg-red-500"
          onClick={() => deleteBranch(branch._id)}
        >
          <Trash />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BranchTableBody;

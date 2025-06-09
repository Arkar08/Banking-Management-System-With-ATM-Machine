import type { BranchTable } from "@/utils/type";
import { TableCell, TableRow } from "../ui/table";
import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import moment from "moment";
import UpdateBranch from "@/pages/Branch/UpdateBranch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";

interface branchProp {
  branch: BranchTable;
  deleteBranch: (id: string) => void;
}

const BranchTableBody = ({ branch, deleteBranch }: branchProp) => {
  const [branchList, setBranchList] = useState('')
  const [open,setOpen] = useState(false)

  const editBtn = (id: string) => {
      setOpen(true)
      setBranchList(id)
  };

  return (
    <TableRow key={branch._id}>
      <TableCell className="capitalize">{branch.branchName} Branch</TableCell>
      <TableCell className="capitalize">{branch.branchLocation}</TableCell>
      <TableCell>{moment(branch.createdAt).format("LLL")}</TableCell>
      <TableCell className="flex gap-3">
         <div
         className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500 rounded-md flex justify-center items-center"
          onClick={() => editBtn(branch._id)}
        >
          <Edit size={18} color="white"/>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Branch</DialogTitle>
            </DialogHeader>
            {
              branchList && (
                <UpdateBranch branchId={branchList} setOpen={setOpen}/>
              )
            }
          </DialogContent>
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

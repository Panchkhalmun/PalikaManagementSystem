import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WomenSectionTableData } from "@/data/womensData";

export function WomenSection() {
  return (
    <div className="p-6 ">
      <Table>
        <TableCaption>List of total numbers of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Contact</TableHead>
            <TableHead className="text-right">Form Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {WomenSectionTableData.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.id}</TableCell>
              <TableCell>{data.userName}</TableCell>
              <TableCell className="font-medium">{data.address}</TableCell>
              <TableCell>{data.contactNumber}</TableCell>
              <TableCell className="">{data.userFormName}</TableCell>
              <TableCell className="flex gap-2">
                <button>Edit</button>
                <button>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> 
      </TableFooter> */}
      </Table>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <div className="flex justify-between">
      <Link href={"/dashboard/womensection/add"}>
       
        <Button>Add</Button>
      </Link>
    </div>
  );
};

export default AdminNavbar;

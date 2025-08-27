import { WomenSection } from "@/components/(app)/dashboard/(access)/womensection/WomenSection";
import AdminNavbar from "@/components/common/Navbars/AdminNavbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        Main page for women section
        <AdminNavbar />
      </div>
      {/* //main table  */}
      <div>
        <WomenSection />
      </div>
    </div>
  );
};

export default Page;

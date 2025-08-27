import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default function dashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-gray-100  min-h-screen relative">
      {/* admin sidebar  */}
      <div className="bg-gray-300 ">
        <Sidebar />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}

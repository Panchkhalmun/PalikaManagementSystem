import { ReactNode } from "react";

export default function dashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-red-500 justify-between">
        {/* admin sidebar  */}
        <p>sidebar</p>
      <main>{children}</main>
    </div>
  );
}

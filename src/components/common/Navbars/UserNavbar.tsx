import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/images/logo.png";

const UserNavbar = () => {
  return (
    <div className=" flex justify-between items-center bg-gray-200 p-2">
      {/* left side  */}
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} height={100} width={80} alt="Municipality Logo" />
        <div>
          <p className="text-xl">पाँचखाल नगरपालिका</p>
          <p>पाँचखाल नगर-कृषि शहर</p>
        </div>
      </div>
      {/* right side  */}
      <div>
        <Link href={"/dashboard"}>
          <button className="cursor-pointer">Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default UserNavbar;

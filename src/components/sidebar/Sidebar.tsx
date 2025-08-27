import Link from "next/link";
import React from "react";

const sectionList = [
  {
    sectionsName: "Women Section",
    link: "/dashboard/womensection",
  },
  {
    sectionsName: "Education Section",
    link: "/dashbaord",
  },
  {
    sectionsName: "Health Section",
    link: "/dashbaord",
  },
  {
    sectionsName: "Lifestock Section",
    link: "/dashbaord",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between z-10  h-full">
      <div className="flex flex-col gap-4 text-xl ">
        {sectionList.map((sections, index) => (
          <p key={index} className="hover:bg-gray-200 p-2 rounded">
            <Link href={sections.link}>{sections.sectionsName}</Link>
          </p>
        ))}
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Sidebar;

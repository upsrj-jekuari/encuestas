import { lazy, Suspense } from "react";
import { SidebarLink } from "../../../../types/sidebar/SideabarLinkl";
import UpsrjLoading from "../../../atoms/Loading/UpsrjLoading";

const SidebarItem = lazy(() => import("../SidebarItem/SidebarItem"));

const SidebarList = ({ links }: { links: SidebarLink[] }) => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <Suspense fallback={<UpsrjLoading className="w-full stroke-cyan-600 " />}>
        {links.map((link, i) => (
          <SidebarItem key={i} sidebarLink={link} />
        ))}
      </Suspense>
    </div>
  );
};

export default SidebarList;

import { DASHBOARD_SIDEBAR_LINKS } from "../../../constants/dashboard/sidebar/links";
import SignOutButton from "../../molecules/Buttons/SignOutButton";
import SidebarList from "../../molecules/Sidebar/SidebarList/SidebarList";

const Sidebar = () => {
  return (
    <div className="w-[80px] p-4 h-full items-center justify-between border-l-neutral-300 border-r flex flex-col">
      <SidebarList links={DASHBOARD_SIDEBAR_LINKS} />
      <SignOutButton />
    </div>
  );
};

export default Sidebar;

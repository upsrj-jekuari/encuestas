import { FaWpforms } from "react-icons/fa6";
import { IoPieChartOutline } from "react-icons/io5";
import { SidebarLink } from "../../../types/sidebar/SideabarLinkl";
import { BsPlus } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Permissions } from "../../authentication/Permissions";

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink[] = [
  {
    Icon: BsPlus,
    to: "/dashboard/new",
  },
  {
    Icon: FaWpforms,
    to: "/dashboard/list",
  },
  {
    Icon: IoPieChartOutline,
    to: "/dashboard/stats",
  },

  {
    Icon: BiUser,
    to: "/dashboard/users",
    requiredPermissions: [Permissions.USER_VIEW],
  },
];

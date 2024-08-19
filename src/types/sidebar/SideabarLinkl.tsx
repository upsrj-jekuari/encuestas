import { IconType } from "react-icons";
import { Permissions } from "../../constants/authentication/Permissions";

export type SidebarLink = {
  Icon: IconType;
  to: string;
  requiredPermissions?: Permissions[];
};

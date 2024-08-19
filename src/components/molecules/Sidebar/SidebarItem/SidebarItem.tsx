import { NavLink } from "react-router-dom";
import { SidebarLink } from "../../../../types/sidebar/SideabarLinkl";
import IconButton from "../../Buttons/IconButton";

const SidebarItem = ({
  sidebarLink: { to, Icon },
}: {
  sidebarLink: SidebarLink;
}) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <IconButton
          bgClass={isActive ? "bg-cyan-600" : "bg-white"}
          borderClass={isActive ? "border-none" : "border border-neutral-300"}
          hoverBgClass={isActive ? "hover:bg-cyan-500" : "hover:bg-neutral-200"}
          Icon={
            <Icon
              className={`w-full h-full ${
                isActive ? "text-white" : "text-black"
              }`}
            />
          }
        />
      )}
    </NavLink>
  );
};

export default SidebarItem;

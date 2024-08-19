import IconButton from "./IconButton";
import { GoSignOut } from "react-icons/go";

const SignOutButton = () => {
  return (
    <IconButton
      hoverBgClass="hover:bg-red-400"
      bgClass="bg-red-500"
      borderClass="border-none"
      Icon={<GoSignOut className="w-full h-full text-red-100" />}
    />
  );
};

export default SignOutButton;

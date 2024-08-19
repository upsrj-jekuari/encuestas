import { MouseEventHandler, ReactNode } from "react";

const IconButton = ({
  Icon,
  onClick,
  hoverBgClass,
  bgClass,
  borderClass,
}: {
  Icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  hoverBgClass?: string;
  bgClass?: string;
  borderClass?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 hover:cursor-pointer ${
        hoverBgClass ? hoverBgClass : "hover:bg-neutral-100"
      } w-[48px] h-[48px] rounded-xl ${
        borderClass ? borderClass : "border-neutral-300 border"
      } flex items-center justify-center ${
        bgClass ? bgClass : "bg-white"
      } transition-colors shadow
`}
    >
      {Icon}
    </button>
  );
};

export default IconButton;

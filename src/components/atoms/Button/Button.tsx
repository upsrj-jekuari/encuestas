import { MouseEventHandler, ReactNode } from "react";

const Button = ({
  onClick,
  children,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="hover:cursor-pointer rounded-xl py-[10px] flex-shrink-0 px-6 bg-cyan-600 text-neutral-100 w-max h-max"
    >
      {children}
    </button>
  );
};

export default Button;

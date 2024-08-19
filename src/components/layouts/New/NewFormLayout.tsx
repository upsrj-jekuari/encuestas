import { ReactNode } from "react";

const NewFormLayout = ({
  header,
  children,
}: {
  header: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex-col flex items-center overflow-auto">
      <div className="flex-shrink-0 w-full h-[300px] bg-red-400">{header}</div>
      <div className="flex-shrink-0 flex flex-col w-full max-w-[800px]">
        {children}
      </div>
    </div>
  );
};

export default NewFormLayout;

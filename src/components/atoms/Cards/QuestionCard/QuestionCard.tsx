import { ReactNode } from "react";

const QuestionCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-xl gap-4 w-full border border-neutral-300 p-4 flex flex-col relative">
      {children}
    </div>
  );
};

export default QuestionCard;

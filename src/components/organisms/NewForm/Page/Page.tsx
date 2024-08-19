import { useCallback } from "react";
import { useFormContext } from "../../../../contexts/NewFormContext";
import PageTitle from "../../../molecules/Pages/Title/Title";
import type { Page } from "../../../../types/form/form";
import PageActions from "../../../molecules/Pages/PageActions/PageActions";
import QuestionsEditor from "../../Questions/Questions";

const Page = () => {
  const { currentPage, setCurrentPage } = useFormContext();

  const setPageTitle = useCallback(
    (val: string) => {
      setCurrentPage({ ...currentPage, title: val } as Page);
    },
    [currentPage, setCurrentPage],
  );

  const setPageDescription = useCallback(
    (val: string) => {
      setCurrentPage({ ...currentPage, description: val } as Page);
    },
    [currentPage, setCurrentPage],
  );

  return (
    <div className="flex py-4 w-full flex-col gap-4 items-center">
      <PageTitle
        title={currentPage?.title || ""}
        setTitle={setPageTitle}
        description={currentPage?.description || ""}
        setDescription={setPageDescription}
      />
      <QuestionsEditor />
      <PageActions />
    </div>
  );
};

export default Page;

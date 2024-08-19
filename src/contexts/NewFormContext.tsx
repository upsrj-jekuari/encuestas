import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Form, QuestionTypes } from "../types/form/form";
import { v4 as uuid } from "uuid";
import { Page } from "../types/form/form";
import { Question } from "../types/form/form";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "../components/organisms/Alert/Alert";

const formContext = createContext<{
  setForm: Dispatch<SetStateAction<Form>>;
  form: Form;
  setPages: (pages: Page[]) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  pageUid: string;
  currentPage: Page | undefined;
  setCurrentPage: (page: Page) => void;
  setQuestions: (questions: Question[]) => void;
  setQuestion: (questionUid: string, question: Question) => void;
  addNewQuestion: () => void;
  removeQuestion: (questionUid: string) => void;
  removePage: (pageUid: string) => void;
  addNewPage: () => void;
  setId: Dispatch<SetStateAction<string>>;
  id: string;
  saveForm: () => void;
}>({
  form: {
    uid: "",
    title: "",
    description: "",
    cover: "",
    pages: [
      {
        uid: "",
        title: "",
        description: "",
        questions: [],
      },
    ],
  },
  setForm: () => null,
  setPages: () => null,
  setTitle: () => null,
  setDescription: () => null,
  pageUid: "",
  currentPage: undefined,
  setCurrentPage: () => null,
  setQuestions: () => null,
  setQuestion: () => null,
  addNewQuestion: () => null,
  removeQuestion: () => null,
  removePage: () => null,
  addNewPage: () => null,
  setId: () => null,
  id: "",
  saveForm: () => null,
});

const FormContext = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState<Form>({
    uid: uuid(),
    title: "",
    description: "",
    cover: "",
    coverFile: undefined,
    pages: [
      {
        uid: uuid(),
        title: "",
        description: "",
        questions: [
          {
            uid: uuid(),
            type: QuestionTypes.SMALL_OPEN_QUESTION,
            title: "",
            description: "",
          },
        ],
      },
    ],
  });

  const [id, setId] = useState("");

  const { id: pagePos } = useParams();

  const alert = useAlert();
  const navigate = useNavigate();

  const setPages = useCallback(
    (pages: Page[]) => {
      setForm((prev) => ({
        ...prev,
        pages,
      }));
    },
    [setForm],
  );
  const setTitle = useCallback(
    (title: string) => {
      setForm((prev) => ({
        ...prev,
        title,
      }));
    },
    [setForm],
  );

  const setDescription = useCallback(
    (description: string) => {
      setForm((prev) => ({
        ...prev,
        description,
      }));
    },
    [setForm],
  );

  const pageUid = useMemo(() => {
    const page = form.pages[parseInt(pagePos || "1") - 1];
    return page?.uid;
  }, [form.pages, pagePos]);

  const currentPage = useMemo(
    () => form.pages.find((p) => p.uid === pageUid),
    [form.pages, pageUid],
  );

  const setCurrentPage = useCallback(
    (page: Page) => {
      if (!pageUid) return;
      setPages(form.pages.map((p) => (p.uid === pageUid ? page : p)));
    },
    [form.pages, pageUid, setPages],
  );

  const addNewPage = useCallback(() => {
    setPages([
      ...form.pages,
      {
        uid: uuid(),
        title: "",
        description: "",
        questions: [],
      },
    ]);
  }, [form.pages, setPages]);

  const setQuestions = useCallback(
    (questions: Question[]) => {
      if (!currentPage) return;
      setCurrentPage({ ...currentPage, questions });
    },
    [setCurrentPage, currentPage],
  );

  const setQuestion = useCallback(
    (questionUid: string, question: Question) => {
      if (!currentPage) return;
      setQuestions(
        currentPage.questions.map((q) =>
          q.uid === questionUid ? question : q,
        ),
      );
    },
    [currentPage, setQuestions],
  );

  const addNewQuestion = useCallback(() => {
    if (!currentPage) return;
    setQuestions([
      ...currentPage.questions,
      {
        uid: uuid(),
        type: QuestionTypes.SMALL_OPEN_QUESTION,
        title: "",
        description: "",
      },
    ]);
  }, [currentPage, setQuestions]);

  const removeQuestion = useCallback(
    (questionUid: string) => {
      if (!currentPage) return;
      setQuestions(currentPage.questions.filter((q) => q.uid !== questionUid));
    },
    [currentPage, setQuestions],
  );

  const removePage = useCallback(
    (pageUid: string) => {
      if (form.pages.length === 1) {
        alert.warning("You can't delete the last page");
        return;
      }
      const index = form.pages.findIndex((p) => p.uid === pageUid);
      if (index === -1) return;

      if (index === form.pages.length - 1) {
        navigate(`/form/${id.length > 0 ? "edit" : "new"}/${index - 1}`);
      }
      setPages(form.pages.filter((p) => p.uid !== pageUid));
    },
    [form.pages, setPages, navigate, alert, id],
  );

  const saveForm = useCallback(() => {
    if (id.length > 0) {
      // TODO: Update form
      console.log("Update form", id, form);
    } else {
      // TODO: Create form
      console.log("Create form", form);
    }
  }, [form, id]);

  return (
    <formContext.Provider
      value={{
        pageUid,
        currentPage,
        setCurrentPage,
        setQuestions,
        setQuestion,
        setTitle,
        setDescription,
        setPages,
        form,
        setForm,
        addNewQuestion,
        removePage,
        removeQuestion,
        addNewPage,
        id,
        setId,
        saveForm,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export default FormContext;

export const useFormContext = (props?: { id?: string }) => {
  const formCtx = useContext(formContext);

  useEffect(() => {
    if (props?.id) {
      formCtx.setId(props.id);
    }
  }, [props?.id, formCtx]);

  return formCtx;
};

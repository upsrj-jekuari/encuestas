import { useFormContext } from "../../../contexts/NewFormContext";
import QuestionEditor from "../../molecules/QuestionEditor/QuestionEditor";

const QuestionsEditor = () => {
  const { currentPage } = useFormContext();
  return currentPage?.questions.map((question, i) => (
    <QuestionEditor question={question} key={i} />
  ));
};

export default QuestionsEditor;

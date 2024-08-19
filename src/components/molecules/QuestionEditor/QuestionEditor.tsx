import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import QuestionCard from "../../atoms/Cards/QuestionCard/QuestionCard";
import SimplifiedInput from "../../molecules/Forms/SimplifiedInput/SimplifiedInputField/SimplifiedInput";
import { useFormContext } from "../../../contexts/NewFormContext";
import {
  ENUM_FROM_READABLES,
  Question,
  QuestionTypes,
  READABLE_QUESTION_TYPES,
} from "../../../types/form/form";
import { SelectInput } from "../../atoms/Input/SelectInput";
import { getAdditionalFieldsFromType } from "../../../utils/Questions/Questions";
import OptionsInput from "./Options/Options";
import OrdinalInput from "./Ordinal/Ordinal";

const QuestionEditor = ({ question }: { question: Question }) => {
  const { setQuestion } = useFormContext();

  const setQuestionTitle = useCallback(
    (val: string) => {
      setQuestion(question.uid, { ...question, title: val });
    },
    [question, setQuestion],
  );

  const setQuestionType = useCallback(
    (val: string) => {
      const enumVal = ENUM_FROM_READABLES[val] as QuestionTypes;
      setQuestion(question.uid, {
        uid: question.uid,
        title: question.title,
        description: question.title,
        type: enumVal,
        ...getAdditionalFieldsFromType(enumVal),
      } as Question);
    },
    [question, setQuestion],
  );

  return (
    <QuestionCard>
      <SimplifiedInput
        title="Pregunta"
        inputFieldProps={{
          value: question.title,
          setter: setQuestionTitle,
          id: uuid(),
          placeholder: "Pregunta",
        }}
      />
      {question.type === QuestionTypes.MULTIPLE_CHOICE_QUESTION ||
      question.type === QuestionTypes.SELECT_MULTIPLE ? (
        <OptionsInput question={question} />
      ) : null}
      {question.type === QuestionTypes.ORDINAL_QUESTION && (
        <OrdinalInput question={question} />
      )}
      <SelectInput
        value={READABLE_QUESTION_TYPES[question.type]}
        setter={setQuestionType}
        type="select"
        options={Object.values(READABLE_QUESTION_TYPES).map((v) => v)}
      />
    </QuestionCard>
  );
};

export default QuestionEditor;

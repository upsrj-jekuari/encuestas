import { useCallback, useState } from "react";
import SimplifiedInput from "../../Forms/SimplifiedInput/SimplifiedInputField/SimplifiedInput";
import { v4 as uuid } from "uuid";
import { useFormContext } from "../../../../contexts/NewFormContext";
import {
  MultipleChoiceQuestion,
  Option,
  SelectMultipleQuestion,
} from "../../../../types/form/form";
import { FaPlus } from "react-icons/fa";
import Button from "../../../atoms/Button/Button";
import { FiTrash } from "react-icons/fi";

const OptionsInput = ({
  question,
}: {
  question: MultipleChoiceQuestion | SelectMultipleQuestion;
}) => {
  const [newOption, setNewOption] = useState("");
  const { setQuestion } = useFormContext();

  const setOptions = useCallback(
    (options: Option[]) => {
      setQuestion(question.uid, { ...question, options });
    },
    [question, setQuestion],
  );

  const addOption = useCallback(() => {
    setOptions([...question.options, { name: newOption, uid: uuid() }]);
    setNewOption("");
  }, [question, setOptions, newOption, setNewOption]);

  const deleteOption = useCallback(
    (uid: string) => {
      setOptions(question.options.filter((option) => option.uid !== uid));
    },
    [question, setOptions],
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-end">
        <SimplifiedInput
          title="Nueva opción"
          inputFieldProps={{
            value: newOption,
            setter: setNewOption,
            placeholder: "Nueva opción",
            id: uuid(),
          }}
        />
        <Button onClick={addOption}>
          <FaPlus className="h-6" />
        </Button>
      </div>
      {question.options.map((option) => (
        <div className="items-center rounded flex p-2 border border-neutral-200 justify-between">
          <p>{option.name}</p>
          <Button onClick={() => deleteOption(option.uid)}>
            <FiTrash />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default OptionsInput;

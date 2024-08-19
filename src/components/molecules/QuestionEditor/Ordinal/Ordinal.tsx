import { useCallback } from "react";
import { useFormContext } from "../../../../contexts/NewFormContext";
import { OrdinalQuestion } from "../../../../types/form/form";
import SimplifiedInput from "../../Forms/SimplifiedInput/SimplifiedInputField/SimplifiedInput";
import { v4 as uuid } from "uuid";
import { useAlert } from "../../../organisms/Alert/Alert";

const OrdinalInput = ({ question }: { question: OrdinalQuestion }) => {
  const { setQuestion } = useFormContext();
  const alert = useAlert();

  const setMax = useCallback(
    (max: number) => {
      if (max > 10) {
        alert.warning("El valor máximo no puede ser más de 10");
        return;
      }
      if (max < 0) {
        alert.warning("El valor máximo no puede ser menos de 0");
        return;
      }
      setQuestion(question.uid, { ...question, max });
    },
    [question, setQuestion, alert],
  );

  return (
    <SimplifiedInput
      title="Valor máximo"
      inputFieldProps={{
        value: question.max,
        type: "number",
        setter: setMax,
        placeholder: "Valor máximo",
        id: uuid(),
      }}
    />
  );
};

export default OrdinalInput;

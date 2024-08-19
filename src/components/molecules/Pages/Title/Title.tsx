import QuestionCard from "../../../atoms/Cards/QuestionCard/QuestionCard";
import SimplifiedInput from "../../Forms/SimplifiedInput/SimplifiedInputField/SimplifiedInput";

import { v4 as uuid } from "uuid";

const PageTitle = ({
  title,
  setTitle,
  description,
  setDescription,
}: {
  title: string;
  setTitle: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
}) => {
  return (
    <QuestionCard>
      <SimplifiedInput
        title="Título de la página"
        inputFieldProps={{
          value: title,
          setter: setTitle,
          id: uuid(),
          placeholder: "Título de la página",
        }}
      />
      <SimplifiedInput
        title="Descripción de la página"
        inputFieldProps={{
          value: description,
          setter: setDescription,
          id: uuid(),
          placeholder: "Descripción de la página",
        }}
      />
    </QuestionCard>
  );
};

export default PageTitle;

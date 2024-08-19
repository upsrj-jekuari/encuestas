import { FaPlus } from "react-icons/fa";
import Button from "../../../atoms/Button/Button";
import { useFormContext } from "../../../../contexts/NewFormContext";

const PageActions = () => {
  const { addNewQuestion } = useFormContext();

  return (
    <div className="flex gap-4">
      <Button onClick={addNewQuestion}>
        <div className="flex gap-4 items-center">
          <FaPlus />
          <p>Añadir pregunta</p>
        </div>
      </Button>
    </div>
  );
};

export default PageActions;

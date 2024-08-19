import { Checkbox } from "react-aria-components";
import { FiCheck } from "react-icons/fi";
import { CheckboxInputProps } from "../../../types/forms/input";

export const CheckboxInput = ({
  type,
  grid,
  label,
  value,
  setter,
  readOnly,
  gridPos,
}: CheckboxInputProps) => {
  return (
    <Checkbox
      style={
        grid
          ? {
              gridColumn: `span ${grid} / span ${grid}`,
              gridColumnStart: gridPos ? gridPos : "auto",
            }
          : {}
      }
      onChange={setter}
      value={value.toString()}
      className="flex items-center gap-4"
      isReadOnly={readOnly}
    >
      <div className="border rounded h-6 flex items-center justify-center w-6">
        {value && <FiCheck />}
      </div>
      {label}
    </Checkbox>
  );
};

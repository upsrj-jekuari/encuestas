import { Input, Label, TextField } from "react-aria-components";
import { PhoneInputProps } from "../../../types/forms/input";
import { GENERIC_INPUT_CLASS } from "../../../constants/forms/input";

export default function PhoneInput({
  name,
  label,
  grid,
  placeholder,
  value,
  required,
  setter,
  readOnly,
  gridPos,
}: PhoneInputProps) {
  return (
    <TextField
      style={
        grid
          ? {
              gridColumn: `span ${grid}`,
              gridColumnStart: gridPos ? gridPos : "auto",
            }
          : {}
      }
      value={value}
      onChange={setter}
      className="text-neutral-800 gap-2 flex flex-col w-full"
      isRequired={required}
      isReadOnly={readOnly}
    >
      <Label>{label}</Label>
      <Input
        className={GENERIC_INPUT_CLASS}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </TextField>
  );
}

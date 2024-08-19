import { useMemo } from "react";
import { Input, Label, TextField } from "react-aria-components";
import { v4 as uuid } from "uuid";
import { TextInputProps } from "../../../types/forms/input";
import { GENERIC_INPUT_CLASS } from "../../../constants/forms/input";

export const TextInput = ({
  name,
  label,
  grid,
  id,
  placeholder,
  required,
  value,
  setter,
  textArea,
  readOnly,
  gridPos,
}: TextInputProps) => {
  const _id = useMemo(() => id || uuid(), [id]);
  return !textArea ? (
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
  ) : (
    <label htmlFor={_id} className="text-neutral-100 flex flex-col">
      {label}
      <textarea
        placeholder={placeholder}
        className="p-4 h-40 focus:outline-none bg-neutral-600 text-neutral-100 resize-none rounded-md"
        name={name}
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
    </label>
  );
};

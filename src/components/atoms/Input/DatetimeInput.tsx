import { GENERIC_INPUT_CLASS } from "../../../constants/forms/input";
import { DatetimeInputProps } from "../../../types/forms/input";

export const DatetimeInput = ({
  name,
  id,
  placeholder,
  value,
  setter,
  readOnly,
  gridPos,
}: DatetimeInputProps) => {
  return (
    <input
      className={GENERIC_INPUT_CLASS}
      type="datetime"
      style={{
        gridColumnStart: gridPos ? gridPos : "auto",
      }}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value.toISOString()}
      onChange={(e) => setter(new Date(e.target.value))}
      disabled={readOnly}
    />
  );
};

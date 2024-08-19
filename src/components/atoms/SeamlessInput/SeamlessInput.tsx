import { ChangeEventHandler } from "react";

const SeamlessInput = ({
  value,
  setter,
  placeholder = "Abc...",
  fontSize = 16,
  max,
}: {
  value: string;
  setter: (val: string) => void;
  placeholder?: string;
  fontSize?: number;
  max?: number;
}) => {
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setter(value);
  };

  return (
    <input
      value={value}
      onChange={handleOnChange}
      className="text-white border-none focus:outline-none bg-transparent w-full"
      placeholder={placeholder}
      style={{
        fontSize,
      }}
      maxLength={max}
    />
  );
};

export default SeamlessInput;

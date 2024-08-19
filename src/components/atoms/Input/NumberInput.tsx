import { NumberInputProps } from "../../../types/forms/input";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";

export const NumberInput = ({
  label,
  placeholder,
  value,
  setter,
  max,
  min,
  grid,
  required,
  readOnly,
  gridPos,
}: NumberInputProps) => {
  return (
    <NumberField
      isRequired={required}
      value={value}
      onChange={setter}
      defaultValue={1024}
      minValue={min}
      maxValue={max}
      className="text-neutral-800 gap-2 flex flex-col w-full"
      isReadOnly={readOnly}
      style={
        grid
          ? {
              gridColumn: `span ${grid} / span ${grid}`,
              gridColumnStart: gridPos ? gridPos : "auto",
            }
          : {}
      }
    >
      <Label>{label}</Label>
      <Group className={`bg-white flex-shrink-0 h-10 rounded-md border flex`}>
        <Button
          slot="decrement"
          className="w-10 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center h-full"
        >
          -
        </Button>
        <Input
          placeholder={placeholder}
          className="w-full px-2 focus:outline-none focus:border-none"
        />
        <Button
          slot="increment"
          className="bg-neutral-100 hover:bg-neutral-200 w-10 flex items-center justify-center h-full"
        >
          +
        </Button>
      </Group>
    </NumberField>
  );
};

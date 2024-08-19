import {
  ComboBox,
  Input as AriaInput, Button,
  Popover,
  ListBox,
  ListBoxItem,
  Label,
} from "react-aria-components";
import { IoChevronDown } from "react-icons/io5";
import { OptionInputProps } from "../../../types/forms/input";
import { GENERIC_INPUT_CLASS } from "../../../constants/forms/input";

export const OptionInput = ({
  name,
  label,
  id,
  placeholder,
  value,
  setter,
  options,
  grid,
  required,
  readOnly,
  gridPos,
}: OptionInputProps) => {
  return (
    <ComboBox
      style={
        grid
          ? {
              gridColumnStart: gridPos ? gridPos : "auto",
              gridColumn: `span ${grid} / span ${grid}`,
            }
          : {}
      }
      isRequired={required}
      className="flex flex-col gap-2 "
      onInputChange={setter}
      inputValue={value}
      isReadOnly={readOnly}
    >
      <Label className="pl-4">{label}</Label>
      <div className={GENERIC_INPUT_CLASS + " !px-0 items-center flex w-full"}>
        <AriaInput
          className="pl-4 w-full focus:border-none focus:outline-none"
          id={id}
          placeholder={placeholder}
        />
        <Button>
          <IoChevronDown className="stroke-brand-blue pr-2 flex-shrink-0 w-8" />
        </Button>
      </div>
      <Popover className="w-max bg-white">
        <ListBox className="px-8 w-full border rounded">
          {options?.map((option, index) => (
            <ListBoxItem className="w-full py-2" key={index} textValue={value}>
              {option}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};

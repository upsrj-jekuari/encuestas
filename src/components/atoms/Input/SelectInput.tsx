import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { IoChevronDown } from "react-icons/io5";
import { SelectInputProps } from "../../../types/forms/input";
import { GENERIC_INPUT_CLASS } from "../../../constants/forms/input";

export const SelectInput = ({
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
}: SelectInputProps) => {
  return (
    <Select
      placeholder={placeholder}
      style={
        grid
          ? {
              gridColumnStart: gridPos ? gridPos : "auto",
              gridColumn: `span ${grid} / span ${grid}`,
            }
          : {}
      }
      isRequired={required}
      className="w-full flex flex-col gap-2 "
      onSelectionChange={(k) => {
        setter(k.toString());
        console.log("selection", k);
      }}
      selectedKey={value}
      isDisabled={readOnly}
    >
      <Label className="pl-4">{label}</Label>
      <Button
        className={GENERIC_INPUT_CLASS + " !px-0 items-center flex w-full"}
      >
        <SelectValue className="w-full flex justify-start pl-4" />
        <span aria-hidden="true">
          <IoChevronDown className="stroke-brand-blue pr-2 flex-shrink-0 w-8" />
        </span>
      </Button>
      <Popover className="w-max">
        <ListBox className="shadow hover:cursor-pointer w-full border rounded bg-white">
          {options?.map((option, index) => (
            <ListBoxItem
              className="focus:outline-none w-full px-8 py-2 hover:bg-slate-100"
              key={index}
              textValue={option}
              id={option}
            >
              {option}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
};

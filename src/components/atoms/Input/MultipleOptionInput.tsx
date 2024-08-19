import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import {
  ComboBox,
  Label,
  Input as AriaInput,
  Button,
  Popover,
  ListBox,
  ListBoxItem,
} from "react-aria-components";
import { FaX } from "react-icons/fa6";
import { MultiOptionInputProps } from "../../../types/forms/input";
import { GENERIC_INPUT_CLASS } from "../../../constants/forms/input";

export const MultipleOptionInput = ({
  id,
  placeholder,
  value,
  setter,
  options,
  readOnly,
  gridPos,
}: MultiOptionInputProps) => {
  const [currentOption, setCurrentOption] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setter((curr) => {
          if (curr.includes(currentOption)) {
            return curr;
          }
          return [...curr, currentOption];
        });
        setCurrentOption("");
      }
    },
    [currentOption, setter],
  );

  const removeOption = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setter(value.filter((_, i) => i !== index));
  };

  return (
    <ComboBox
      inputValue={currentOption}
      onInputChange={(input) => {
        setCurrentOption(input);
      }}
      ref={containerRef}
      className="relative"
      isReadOnly={readOnly}
    >
      <Label className="text-neutral-100">{placeholder}</Label>
      <div className="flex flex-shrink-0 flex-col gap-2">
        <div>
          <AriaInput
            id={id}
            className={GENERIC_INPUT_CLASS}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
          />
          <Button>▼</Button>
        </div>
        <div className="flex flex-shrink-0 gap-2 w-full overflow-auto">
          {value.map((val, index) => (
            <button
              onClick={(e) => removeOption(e, index)}
              key={index}
              className="items-center flex-shrink-0 text-neutral-100 p-2 flex gap-2 rounded bg-neutral-600"
            >
              <p>{val}</p>
              <FaX />
            </button>
          ))}
        </div>
      </div>
      <Popover className="w-40">
        <ListBox
          onSelectionChange={(selection) => {
            console.log("selection: ", selection);
            setCurrentOption(selection.toString());
          }}
          className="w-full flex flex-col divide-y divide-neutral-300"
        >
          {options.map((option, index) => (
            <ListBoxItem
              key={index}
              className="w-full h-10 bg-neutral-600 items-center flex justify-center"
              textValue={option}
            >
              {option}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};

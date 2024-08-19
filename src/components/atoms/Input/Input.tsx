import { useMemo } from "react";

import { InputProps } from "../../../types/forms/input";
import { DatePicker } from "./DatePicker";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { DatetimeInput } from "./DatetimeInput";
import { OptionInput } from "./OptionInput";
import { MultipleOptionInput } from "./MultipleOptionInput";
import { SelectInput } from "./SelectInput";
import { CheckboxInput } from "./CheckboxInput";
import FilesInput from "./ImagesInput";
import FileInput from "./FileInput";
import PhoneInput from "./PhoneInput";

export default function Input(props: InputProps) {
  const InputField = useMemo(() => {
    switch (props.type) {
      case "text":
        return <TextInput {...props} />;
      case "number":
        return <NumberInput {...props} />;
      case "date":
        return <DatePicker {...props} />;
      case "datetime":
        return <DatetimeInput {...props} />;
      case "option":
        return <OptionInput {...props} />;
      case "multi-option":
        return <MultipleOptionInput {...props} />;
      case "select":
        return <SelectInput {...props} />;
      case "checkbox":
        return <CheckboxInput {...props} />;
      case "files":
        return <FilesInput {...props} />;
      case "file":
        return <FileInput {...props} />;
      case "tel":
        return <PhoneInput {...props} />;
      case "email":
        return <TextInput {...props} />;
      default:
        return null;
    }
  }, [props]);

  return InputField;
}

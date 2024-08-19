import { ReactNode } from "react";
import SimplifiedInputTemplate from "../SimplifiedInputTemplate.js";
import InputField, {
  InputFieldProps,
} from "../../../../atoms/InputField/InputField";

const SimplifiedInput = ({
  moreInfo,
  inputFieldProps,
  title,
}: {
  moreInfo?: ReactNode;
  inputFieldProps: InputFieldProps;
  title: string;
}) => {
  return (
    <SimplifiedInputTemplate title={title} moreInfo={moreInfo}>
      <InputField {...inputFieldProps} />
    </SimplifiedInputTemplate>
  );
};

export default SimplifiedInput;

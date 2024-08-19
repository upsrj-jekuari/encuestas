import { Dispatch, SetStateAction } from "react";

export type TextInputProps = {
  type: "text" | "email" | "password";
  readOnly?: boolean;
  name?: string;
  label?: string;
  id?: string;
  grid?: number;
  placeholder?: string;
  value: string;
  required?: boolean;
  setter: (e: string) => void;
  textArea?: boolean;
  gridPos?: number;
};

export type PhoneInputProps = {
  type: "tel";
  readOnly?: boolean;
  name?: string;
  label?: string;
  id?: string;
  grid?: number;
  placeholder?: string;
  value: string;
  required?: boolean;
  setter: (e: string) => void;
  textArea?: boolean;
  gridPos?: number;
};

export type NumberInputProps = {
  readOnly?: boolean;
  type: "number";
  name?: string;
  label?: string;
  grid?: number;
  required?: boolean;
  id?: string;
  placeholder?: string;
  value: number;
  setter: (e: number) => void;
  textArea?: never;
  max?: number;
  min?: number;
  gridPos?: number;
};

export type DateInputProps = {
  readOnly?: boolean;
  type: "date";
  name?: string;
  id?: string;
  label?: string;
  required?: boolean;
  grid?: number;
  placeholder?: string;
  value: Date;
  setter: (e: Date) => void;
  textArea?: never;
  gridPos?: number;
};

export type FilesInputProps = {
  readOnly?: boolean;
  type: "files";
  files: File[];
  setter: Dispatch<SetStateAction<File[]>>;
  grid?: number;
  gridPos?: number;
};

export type FileInputProps = {
  readOnly?: boolean;
  type: "file";
  file: File | null;
  setter: Dispatch<SetStateAction<File | null>>;
  grid?: number;
  gridPos?: number;
};

export type DatetimeInputProps = {
  readOnly?: boolean;
  type: "datetime";
  name?: string;
  id?: string;
  placeholder?: string;
  value: Date;
  setter: (e: Date) => void;
  textArea?: never;
  gridPos?: number;
};

export type OptionInputProps = {
  readOnly?: boolean;
  type: "option";
  name?: string;
  label?: string;
  required?: boolean;
  grid?: number;
  id?: string;
  placeholder?: string;
  value: string;
  setter: (e: string) => void;
  options: string[];
  gridPos?: number;
};

export type SelectInputProps = {
  readOnly?: boolean;
  type: "select";
  name?: string;
  label?: string;
  required?: boolean;
  grid?: number;
  id?: string;
  placeholder?: string;
  value: string;
  setter: (e: string) => void;
  options: string[];
  gridPos?: number;
};

export type MultiOptionInputProps = {
  type: "multi-option";
  readOnly?: boolean;
  name?: string;
  id?: string;
  placeholder?: string;
  value: string[];
  setter: Dispatch<React.SetStateAction<string[]>>;
  options: string[];
  gridPos?: number;
};

export type CheckboxInputProps = {
  type: "checkbox";
  grid?: number;
  label?: string;
  readOnly?: boolean;
  value: boolean;
  setter: Dispatch<React.SetStateAction<boolean>>;
  gridPos?: number;
};

export type InputProps =
  | TextInputProps
  | NumberInputProps
  | DateInputProps
  | DatetimeInputProps
  | OptionInputProps
  | MultiOptionInputProps
  | SelectInputProps
  | CheckboxInputProps
  | FilesInputProps
  | FileInputProps
  | PhoneInputProps;

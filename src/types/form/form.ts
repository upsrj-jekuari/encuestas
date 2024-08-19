export type Form = {
  uid: string;
  title: string;
  description: string;
  pages: Page[];
  cover: string;
  coverFile?: File;
};

export type Page = {
  uid: string;
  title: string;
  description: string;
  questions: Question[];
};

export type QuestionBase = {
  uid: string;
  title: string;
  description: string;
  value: string;
};

export interface SmallOpenQuestion extends QuestionBase {
  type: QuestionTypes.SMALL_OPEN_QUESTION,
}

export interface OpenQuestion extends QuestionBase {
  type: QuestionTypes.OPEN_QUESTION,
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: QuestionTypes.MULTIPLE_CHOICE_QUESTION,
  options: Option[]
}

export interface OrdinalQuestion extends QuestionBase {
  type: QuestionTypes.ORDINAL_QUESTION,
  max: number;
}

export interface SelectMultipleQuestion extends QuestionBase {
  type: QuestionTypes.SELECT_MULTIPLE,
  options: Option[]
}

export interface DicotomyQuestion extends QuestionBase {
  type: QuestionTypes.DICOTOMY
}

export interface NumericalQuestion extends QuestionBase {
  type: QuestionTypes.NUMERICAL_QUESTION
}

export type Option = {
  name: string;
  uid: string;
}

export type Question = SmallOpenQuestion | MultipleChoiceQuestion | OpenQuestion | OrdinalQuestion | SelectMultipleQuestion | DicotomyQuestion | NumericalQuestion

export enum QuestionTypes {
  OPEN_QUESTION = "OPEN_QUESTION",
  SMALL_OPEN_QUESTION = "SMALL_OPEN_QUESTION",
  MULTIPLE_CHOICE_QUESTION = "MULTIPLE_CHOICE_QUESTION",
  ORDINAL_QUESTION = "ORDINAL_QUESTION",
  SELECT_MULTIPLE = "SELECT_MULTIPLE",
  DICOTOMY = "DICOTOMY",
  NUMERICAL_QUESTION = "NUMERICAL_QUESTION",
}

export const QUESTION_TYPES = [
  "OPEN_QUESTION",
  "SMALL_OPEN_QUESTION",
  "MULTIPLE_CHOICE_QUESTION",
  "ORDINAL_QUESTION",
  "SELECT_MULTIPLE",
  "DICOTOMY",
  "NUMERICAL_QUESTION",
];

export const READABLE_QUESTION_TYPES = {
  OPEN_QUESTION: "Texto Largo",
  SMALL_OPEN_QUESTION: "Texto Corto",
  MULTIPLE_CHOICE_QUESTION: "Opción Múltiple",
  ORDINAL_QUESTION: "Respuesta ordinal (Calificación)",
  SELECT_MULTIPLE: "Seleccionar varios",
  DICOTOMY: "Sí o no",
  NUMERICAL_QUESTION: "Número",
};


  export const ENUM_FROM_READABLES: { [key: string]: string } = {};
  Object.entries(READABLE_QUESTION_TYPES).forEach(([k, v]) => {
    ENUM_FROM_READABLES[v] = k;
  });

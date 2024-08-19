import { QuestionTypes } from "../../types/form/form";

export const getAdditionalFieldsFromType = (questionType: QuestionTypes) => {
  if (questionType === QuestionTypes.SELECT_MULTIPLE) return { options: [] };
  if (questionType === QuestionTypes.MULTIPLE_CHOICE_QUESTION)
    return { options: [] };
  if (questionType === QuestionTypes.ORDINAL_QUESTION) return { max: 5 };
  return {};
};

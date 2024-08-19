import FormContext from "../../../contexts/NewFormContext";
import NewFormLayout from "../../layouts/New/NewFormLayout";
import Header from "../../organisms/NewForm/Header/Header";
import Page from "../../organisms/NewForm/Page/Page";

const NewFormPage = () => {
  return (
    <FormContext>
      <NewFormLayout header={<Header />}><Page /></NewFormLayout>
    </FormContext>
  );
};

export default NewFormPage;

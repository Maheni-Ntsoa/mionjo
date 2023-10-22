import Alert from "@mui/material/Alert";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../components/Button";
import SaveUser from "../../../../../usecases/user/SaveUser";

interface AddUserProps {
  refetch: () => void;
  onClose: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ refetch, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const initialValues = { idrole: "", email: "", mdp: "", etat: "" };
  const validationSchema = Yup.object({
    idrole: Yup.string(),
    email: Yup.string(),
    mdp: Yup.string(),
    etat: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    await new SaveUser().execute(values);
    console.log(values, "regt");

    resetForm();
    setIsSuccess(true);
    refetch();
    onClose();
  };

  return (
    <div className="px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="p-8">
            {isSuccess && (
              <Alert severity="success"> Utilisaateur inserer!</Alert>
            )}

            <div className="mb-4">
              <Field
                placeholder="email"
                name="email"
                type="email"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Field
                placeholder=""
                name="mdp"
                type="password"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-center">
              <Button
                name="Enregistrer"
                type="submit"
                className="border-white border"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;

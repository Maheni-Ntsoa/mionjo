import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";

const AddLiensUtiles = () => {
  const initialValues = { titre: "", lien: "", texte: "" };
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    titre: Yup.string(),
    lien: Yup.string(),
    texte: Yup.string(),
  });

  const onSubmit = (values: any, { resetForm }: any) => {
    setIsSuccess(true);
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
            {isSuccess && <Alert severity="success"> Succès!</Alert>}
            <div className="mb-4">
              <Field
                placeholder="Titre"
                name="titre"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="titre"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <Field
                  placeholder="Importer des images"
                  name="image"
                  type="text"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <img
                  src="/assets/icons/ic_export.svg"
                  alt="ic_export"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                />
              </div>
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

export default AddLiensUtiles;

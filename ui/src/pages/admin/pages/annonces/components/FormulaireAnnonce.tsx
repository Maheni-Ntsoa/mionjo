import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../../../components/Button";

const FormulaireAnnonce = () => {
  const initialValues = { titre: "", lien: "", texte: "" };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    lien: Yup.string(),
    texte: Yup.string(),
  });
  const onSubmit = (values: any, { resetForm }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }, 400);
  };
  return (
    <div className="px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="p-8">
          <div className="mb-4">
            <Field
              placeholder="Nom de l'annonce"
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
          <div className="mb-4">
            <div className="relative">
              <Field
                name="color"
                as="select"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="consultants">Consultants</option>
                <option value="fournitures">Fournitures</option>
                <option value="réalisation">Réalisation</option>
                <option value="annonces">Annonces</option>
              </Field>
            </div>
            <ErrorMessage
              name="message"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-6">
            <div className="relative">
              <Field
                placeholder="Lien"
                name="lien"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <img
                src="/assets/icons/ic_import.svg"
                alt="ic_import"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
            <ErrorMessage
              name="titre"
              component="div"
              className="text-red text-xs italic"
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
      </Formik>
    </div>
  );
};
export default FormulaireAnnonce;

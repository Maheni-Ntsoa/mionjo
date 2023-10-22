import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../../../../components/Button";

const AddComposanteForm = () => {
  const initialValues = { titre: "", image: "", video: "", texte: "" };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    image: Yup.string(),
    video: Yup.string(),
    texte: Yup.string(),
  });
  const onSubmit = (values: any, { resetForm }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }, 400);
  };
  return (
    <div className="px-4 ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="p-8">
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
          <div className="mb-4">
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
            <ErrorMessage
              name="texte"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <Field
                placeholder="Importer des videos"
                name="video"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <img
                src="/assets/icons/ic_export.svg"
                alt="ic_export"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
            <ErrorMessage
              name="videos"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-6">
            <Field
              placeholder="Texte"
              name="texte"
              as="textarea"
              rows="5"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="flex justify-center">
            <Button
              name="Enregister"
              type="submit"
              className="border-white border"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddComposanteForm;

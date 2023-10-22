import { ErrorMessage, Field, Form, Formik } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import SaveGenerale from "../../../../../../usecases/Generale/SaveGenerale";

const AddComposante = () => {
  const initialValues = { titre: "", contenu: "" };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
    // photo: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 2;
    values.idrubrique = 1;

    await new SaveGenerale().execute(values);
    resetForm();
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
            {/* <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                            Sélectionner une image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={(event) => {
                                // Handle the image selection and set it to a field in Formik values
                                const selectedImage = event.currentTarget.files[0];
                                setFieldValue("image", selectedImage);
                            }}
                        />
                        <ErrorMessage
                            name="image"
                            component="div"
                            className="text-red text-xs italic"
                        />
                    </div> */}
            <div className="mb-6">
              {/* Utilisez ReactQuill à la place de Field pour le texte */}
              <ReactQuill
                className=""
                value={values.contenu}
                onChange={(value) => handleChange("contenu")(value)}
                placeholder="Contenu"
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline", "strike"],

                    [{ align: [] }],
                    [{ color: [] }, { background: [] }],
                    ["blockquote"],
                    ["code-block"],
                    ["formula"],
                    ["clean"], // Pour supprimer la mise en forme
                  ],
                }}
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

export default AddComposante;

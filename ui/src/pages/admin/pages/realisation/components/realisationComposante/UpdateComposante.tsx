import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";

interface UpdateComposanteProps {
  actualite: any;
}

const UpdateComposante: React.FC<UpdateComposanteProps> = ({ actualite }) => {
  const [actu, setActu] = useState<any>({});

  useEffect(() => {
    if (actualite) {
      setActu(actualite);
    }
  }, []);

  const initialValues = {
    titre: `${actu ? actu.titre : ""}`,
    lien: `${actu ? actu.lien : ""}`,
    texte: `${actu ? actu.lien : ""}`,
  };
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
            <div className="mb-6">
              {/* Utilisez ReactQuill à la place de Field pour le texte */}
              <ReactQuill
                className=""
                value={values.texte}
                onChange={(value) => handleChange("texte")(value)}
                placeholder="Texte"
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

export default UpdateComposante;

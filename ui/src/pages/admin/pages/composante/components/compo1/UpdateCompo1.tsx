import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import UpdateGenerale from "../../../../../../usecases/Generale/UpdateGenerale";

interface UpdateCompo1Props {
  objectif: any;
  onClose: any;
  buttonActiver: boolean;
  refetch: () => void;
}

const UpdateCompo1: React.FC<UpdateCompo1Props> = ({
  objectif,
  buttonActiver,
  onClose,
  refetch,
}) => {
  const [actu, setActu] = useState<any>({});

  useEffect(() => {
    if (objectif) {
      setActu(objectif);
    }
  }, []);
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  const initialValues = {
    titre: `${objectif.titre ? objectif.titre : ""}`,
    contenu: `${objectif.contenu ? objectif.contenu : ""}`,
  };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 6;
    values.idrubrique = 22;
    values.id = objectif.id;

    await new UpdateGenerale().execute(values);
    resetForm();
    console.log(values);
    refetch();
    // onClose();
    setIsSuccess(true);
  };

  return (
    <div className="px-4">
      <div className="flex justify-center">
        <p className="text-yellow">Modification de composante 1</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="p-8">
            {isSuccess && (
              <Alert severity="success"> Modification réussi!</Alert>
            )}
            <div className="mb-4">
              <Field
                value={values.titre}
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
              {/* Utilisez ReactQuill à la place de Field pour le contenu */}
              <ReactQuill
                className=""
                value={values.contenu}
                onChange={(values) => handleChange("contenu")(values)}
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

export default UpdateCompo1;

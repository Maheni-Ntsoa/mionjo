import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import UpdateGenerale from "../../../../../../usecases/Generale/UpdateGenerale";

interface UpdateEvenementProps {
  evenement: any;
  onclose: any;
  buttonActiver: boolean;
  refetch: () => void;
}

const UpdateEvenement: React.FC<UpdateEvenementProps> = ({
  evenement,
  onclose,
  buttonActiver,
  refetch,
}) => {
  const [evene, setEvene] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  useEffect(() => {
    if (evenement) {
      setEvene(evenement);
    }
  }, []);

  const initialValues = {
    titre: `${evenement.titre ? evenement.titre : ""}`,
    contenu: `${evenement.contenu ? evenement.contenu : ""}`,
  };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 1;
    values.idrubrique = 2;
    values.id = evenement.id;

    await new UpdateGenerale().execute(values);
    resetForm();
    refetch();
    setIsSuccess(true);

    console.log(values);
    // onclose();
  };

  return (
    <div className="px-4">
      <div className="flex justify-center">
        <p className="text-yellow text-xl font-bold">
          {`${
            buttonActiver
              ? "Modification de l'evenement"
              : "Detail de l'evenement"
          }`}
        </p>
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
              {buttonActiver && (
                <Button
                  name="Enregistrer"
                  type="submit"
                  className="border-white border"
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateEvenement;

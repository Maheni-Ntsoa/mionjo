import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import UpdateGenerale from "../../../../../../usecases/Generale/UpdateGenerale";

interface UpdateFournitureProps {
  Fourniture: any;
  onclose: any;
  refetch: () => void;
}

const UpdateFourniture: React.FC<UpdateFournitureProps> = ({
  Fourniture,
  onclose,
  refetch,
}) => {
  const [consu, setConsu] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  useEffect(() => {
    if (Fourniture) {
      setConsu(Fourniture);
    }
  }, []);

  const initialValues = {
    titre: `${Fourniture.titre ? Fourniture.titre : ""}`,
    contenu: `${Fourniture.datelimite ? Fourniture.datelimite : ""}`,
  };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    datelimite: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 4;
    values.idrubrique = 16;
    values.id = Fourniture.id;

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
        <p className="">Modification de Fourniture</p>
      </div>

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
            <div className="mb-6">
              {/* Utilisez ReactQuill à la place de Field pour le texte */}
              <Field
                placeholder="Date limite"
                name="datelimit"
                type="datetime-local"
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

export default UpdateFourniture;

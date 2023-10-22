import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";

interface UpdateUserProps {
  actualite: any;
  onClose: any;
  buttonActiver: boolean;
  refetch: () => void;
}

const UpdateUser: React.FC<UpdateUserProps> = ({
  actualite,
  buttonActiver,
  onClose,
  refetch,
}) => {
  const [actu, setActu] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (actualite) {
      setActu(actualite);
    }
  }, []);

  const initialValues = {
    titre: `${actualite.titre ? actualite.titre : ""}`,
    contenu: `${actualite.contenu ? actualite.contenu : ""}`,
  };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    // await new UpdateGenerale().execute(values);
    resetForm();
    setIsSuccess(true);
    refetch();
    // onClose();
  };

  return (
    <div className="px-4">
      <div className="flex justify-center">
        <p className="text-yellow text-xl font-bold">
          {`${
            buttonActiver
              ? "Modification de l'actualité"
              : "Detail de l'actualité"
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
              <Alert severity="success"> Modification d'utilisateur!</Alert>
            )}
            <div className="mb-4">
              <Field
                placeholder="nom"
                name="nom"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="nom"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <Field
                placeholder="prenom"
                name="prenom"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
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

export default UpdateUser;

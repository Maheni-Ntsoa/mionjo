import Alert from "@mui/material/Alert";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../components/Button";
import UpdateUser from "../../../../../usecases/user/UpdateUser";

interface UpdateUserProps {
  user: any;
  onClose: any;
  buttonActiver: boolean;
  refetch: () => void;
}

const UpdateUserc: React.FC<UpdateUserProps> = ({
  user,
  buttonActiver,
  onClose,
  refetch,
}) => {
  const [actu, setActu] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setActu(user);
    }
  }, []);

  const initialValues = {
    idrole: `${user.idrole ? user.idrole : ""}`,
    email: `${user.email ? user.email : ""}`,
    // mdp: `${user.mdp ? user.mdp : ""}`,
  };
  const validationSchema = Yup.object({
    idrole: Yup.string(),
    email: Yup.string(),
    // mdp: Yup.string(),
  });

  const roles = [
    { id: "1", label: "SUPERADMIN" },
    { id: "2", label: "ANNONCE" },
    { id: "3", label: "ACCUEIL" },
    { id: "4", label: "DOCUMENTATION" },
    { id: "5", label: "IDEEPLAINTE" },
  ];

  const onSubmit = async (values: any, { resetForm }: any) => {
    const userValue = {
      id: user.id,
      idrole: +values.idrole,
      email: values.email,
      // mdp: values.mdp,
    };

    await new UpdateUser().execute(userValue);
    resetForm();
    setIsSuccess(true);
    refetch();
  };

  return (
    <div className="px-4">
      {/* <div className="flex justify-center">
        <p className="text-yellow text-xl font-bold">
          {`${buttonActiver
            ? "Modification de l'utilisateur"
            : "Detail de l'utilisateur"
            }`}
        </p>
      </div> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="p-8">
            {isSuccess && (
              <div className="my-4">
                <Alert severity="success"> Utilisateur enregistré !</Alert>
              </div>
            )}

            <div className="mb-4">
              <Field
                value={values.email}
                name="email"
                type="email"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* <div className="mb-4">
              <Field
                value={values.mdp}
                name="mdp"
                type="password"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              />
            </div> */}
            <div className="mb-4">
              <Field
                name="idrole"
                as="select"
                className="shadow rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled className="text-gray-700">
                  Sélectionnez un rôle
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.label}
                  </option>
                ))}
              </Field>
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

export default UpdateUserc;

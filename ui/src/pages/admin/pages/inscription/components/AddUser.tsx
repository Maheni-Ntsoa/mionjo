import Alert from "@mui/material/Alert";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Button from "../../../../../components/Button";
import Loading from "../../../../../components/Loading";
import SaveUser from "../../../../../usecases/user/SaveUser";

interface AddUserProps {
  refetch: () => void;
  onClose: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ refetch, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValues = { idrole: "", email: "", mdp: "" };
  const validationSchema = Yup.object({
    idrole: Yup.string().required("Champ obligatoire"),
    email: Yup.string().required("Champ obligatoire"),
    mdp: Yup.string().required("Champ obligatoire"),
  });

  const roles = [
    { id: "1", label: "SUPERADMIN" },
    { id: "2", label: "ANNONCE" },
    { id: "3", label: "ACCUEIL" },
    { id: "4", label: "DOCUMENTATION" },
    { id: "5", label: "IDEEPLAINTE" },
  ];

  const onSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    await new SaveUser().execute(values);
    resetForm();
    setIsSuccess(true);
    refetch();
    setLoading(false);
  };

  return (
    <div className="px-4 w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="p-8">
          {isSuccess && (
            <div className="my-4">
              <Alert severity="success"> Utilisateur enregistré !</Alert>
            </div>
          )}

          <div className="mb-4">
            <Field
              placeholder="Email"
              name="email"
              type="email"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <Field
              placeholder="Mot de passe"
              name="mdp"
              type="password"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>
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
            {loading ? (
              <Loading isLoading={loading} />
            ) : (
              <Button
                name="Enregistrer"
                type="submit"
                className="border-white border"
              />
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUser;

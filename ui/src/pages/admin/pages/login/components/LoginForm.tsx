import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ButtonImage from "../../../../../components/ButtonImage";
import LoginUser from "../../../../../usecases/user/LoginUser";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const initialValues = { email: "", mdp: "" };
  const validationSchema = Yup.object({
    email: Yup.string().required("Champ obligatoire"),
    mdp: Yup.string().required("Champ obligatoire"),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    setError(false);
    const user: any = await new LoginUser().execute(values);
    if (user.success) {
      localStorage.setItem("user", JSON.stringify(user.data));
      if (user.data.idrole === 1) {
        navigate("/admin");
        resetForm();
      }
      if (user.data.idrole === 2) {
        navigate("/admin/annonce");
        resetForm();
      }
      if (user.data.idrole === 3) {
        navigate("/admin");
        resetForm();
      }
      if (user.data.idrole === 4) {
        navigate("/admin/documentation");
        resetForm();
      }
      if (user.data.idrole === 5) {
        navigate("/admin/ideecontribution");
        resetForm();
      }
    }
    if (user.success === false) {
      setError(true);
    }
  };

  return (
    <div className="px-4  w-[400px]">
      <div className="flex justify-center mt-10">
        <img
          src="/assets/logos/logomionjo.svg"
          width={80}
          height={80}
          alt="logo_mionjo"
        />
      </div>
      <div className="flex justify-center mt-8">
        <h1 className="text-xl lg:text-4xl font-bold text-blue ">
          Se connecter
        </h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="p-8">
          <div className="mb-4">
            <label
              className="block text-blue text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <label
                className="block text-blue text-sm font-bold mb-2"
                htmlFor="mdp"
              >
                Mot de passe
              </label>
              <div className="relative">
                <Field
                  name="mdp"
                  type="password"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <ErrorMessage
              name="mdp"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="flex justify-center">
            <ButtonImage src="BtnLog" type="submit" />
          </div>
          <div className="py-4">
            {error && (
              <Alert severity="error">Verifiez vos informations !</Alert>
            )}
          </div>
        </Form>
      </Formik>
      <p
        className="text-blue text-md cursor-pointer my-4 hover:underline"
        onClick={() => navigate("/")}
      >
        Retour vers la page d'accueil
      </p>
    </div>
  );
};

export default LoginForm;

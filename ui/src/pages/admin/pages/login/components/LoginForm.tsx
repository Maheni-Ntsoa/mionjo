import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ButtonImage from "../../../../../components/ButtonImage";
import LoginUser from "../../../../../usecases/user/LoginUser";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initialValues = { email: "", mdp: "" };
  const validationSchema = Yup.object({
    email: Yup.string().required("Champ obligatoire"),
    mdp: Yup.string().required("Champ obligatoire"),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    const user = await new LoginUser().execute(values);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin");
    }
    if (!user) {
      setError("Informations invalide");
    }
    resetForm();
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
        </Form>
      </Formik>
      <p
        className="text-blue text-md cursor-pointer my-4 hover:underline"
        onClick={() => navigate("/")}
      >
        Retour vers la page d'accueil
      </p>
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default LoginForm;

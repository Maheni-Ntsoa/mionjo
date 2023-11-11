import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import ButtonImage from "../../../../components/ButtonImage";
import SendMailNousContacter from "../../../../usecases/Email/SendMailNousContacter";

const ContactUsForm = () => {
  const { t } = useTranslation();
  const [successM, setSuccessM] = useState(false);
  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    objet: "",
    message: "",
  };
  const validationSchema = Yup.object({
    nom: Yup.string().required("Champ obligatoire"),
    prenom: Yup.string().required("Champ obligatoire"),
    email: Yup.string().required("Champ obligatoire").email("Email invalide"),
    objet: Yup.string().required("Champ obligatoire"),
    message: Yup.string().required("Champ obligatoire"),
  });
  const onSubmit = async (values: any, { resetForm }: any) => {
    const sendMailValues = {
      nom: values.nom,
      prenom: values.prenom,
      email: values.email,
      objet: values.objet,
      message: values.message,
    };

    await new SendMailNousContacter().execute(sendMailValues);
    // await new SendMailRetourNousContacter().execute(sendMailValues.email);
    setSuccessM(false);
    resetForm();
    setSuccessM(true);
  };
  return (
    <div className="w-full mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black/70 text-sm font-bold mb-2">
              {t("nom")} <span className="text-red">*</span>
            </label>
            <Field
              placeholder={t("nom")}
              name="nom"
              type="text"
              className="shadow appearance-none rounded w-full h-14 py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="nom"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black/70 text-sm font-bold mb-2">
              {t("prenom")} <span className="text-red">*</span>
            </label>
            <Field
              placeholder={t("prenom")}
              name="prenom"
              type="text"
              className="shadow appearance-none rounded w-full h-14 py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="prenom"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black/70 text-sm font-bold mb-2">
              {t("email")} <span className="text-red">*</span>
            </label>
            <Field
              placeholder={t("email")}
              name="email"
              type="email"
              className="shadow appearance-none rounded w-full h-14 py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black/70 text-sm font-bold mb-2">
              {t("objet")} <span className="text-red">*</span>
            </label>
            <Field
              placeholder={t("objet")}
              name="objet"
              type="text"
              className="shadow appearance-none rounded w-full h-14 py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="objet"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black/70 text-sm font-bold mb-2">
              {t("message")} <span className="text-red">*</span>
            </label>
            <Field
              placeholder={t("message")}
              name="message"
              as="textarea"
              rows="5"
              className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red text-xs italic"
            />
          </div>
          <div className="flex justify-center">
            <ButtonImage type="submit" src="BtnSend" width="w-[17rem]" />
          </div>
          {successM && (
            <div className="my-2">
              <Alert severity="success">Merci de nous avoir contacter !</Alert>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUsForm;

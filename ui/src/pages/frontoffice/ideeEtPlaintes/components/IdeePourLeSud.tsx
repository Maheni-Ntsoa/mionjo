import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import ButtonImage from "../../../../components/ButtonImage";
import SubTitle from "../../../../components/SubTitle";
import SaveIdee from "../../../../usecases/Idee/SaveIdee";

interface IdeePourLeSudProps {
  texte: string;
}

const IdeePourLeSud: React.FC<IdeePourLeSudProps> = ({ texte }) => {
  const { t } = useTranslation();

  const [successM, setSuccessM] = useState(false);
  const [fetch, setFetch] = useState(true);

  const refetch = () => {
    setFetch(!fetch);
  };
  const initialValues = { contenu: "", descriptif: "" };
  const validationSchema = Yup.object({
    descriptif: Yup.string().required("Champ obligatoire"),
    contenu: Yup.string().required("Champ obligatoire"),
  });
  const onSubmit = async (values: any, { resetForm }: any) => {
    setSuccessM(false);
    await new SaveIdee().execute(values);
    resetForm();
    refetch();
    setSuccessM(true);
  };
  return (
    <div className="flex flex-col gap-2 mx-4">
      <div className="flex justify-center">
        <SubTitle title="IdeeSud" className="text-black/70" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-4 xl:w-[1060px] xl:h-[600px]">
        <div className="lg:w-1/2 flex flex-col items-center justify-center gap-4 border-black/60 border-2">
          <div className="">
            <img
              src="/assets/icons/ic_ideecontri.png"
              height={200}
              width={200}
              alt="logo_mionjo"
            />
          </div>
          <div className="text-center">
            <h1 className="text-black/60 lg:text-4xl px-8">{t("idée")}</h1>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white text-white  flex flex-col items-center justify-center p-4 border-black/60 border-2">
          <div className="w-full mx-auto ">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="px-8 pt-6 pb-8 mb-4 ">
                <div className="mb-6">
                  {/* <label className="block text-black/70 text-sm font-bold mb-2">
                    {t("descriptif")} <span className="text-red">*</span>
                  </label> */}
                  <Field
                    placeholder={t("descriptif")}
                    name="descriptif"
                    type="text"
                    className="shadow appearance-none rounded w-full xl:h-20 py-2 px-3 text-black/70 border-black/60 border-2 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="descriptif"
                    component="div"
                    className="text-red text-xs italic"
                  />
                </div>
                <div className="mb-6">
                  {/* <label
                    className="block text-black/70 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    {t("détail")}
                    <span className="text-red">*</span>
                  </label> */}
                  <Field
                    placeholder={t("détail")}
                    name="contenu"
                    as="textarea"
                    rows="5"
                    className="shadow appearance-none rounded w-full xl:h-40 py-2 px-3 text-black/70 border-black/60 border-2 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="contenu"
                    component="div"
                    className="text-red text-xs italic"
                  />
                </div>
                <div className="flex justify-center">
                  <ButtonImage type="submit" src="BtnIdee" />
                </div>
                {successM && (
                  <div className="my-2">
                    <Alert severity="success">Votre idee a été envoyer</Alert>
                  </div>
                )}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeePourLeSud;

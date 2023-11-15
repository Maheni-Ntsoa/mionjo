import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import ButtonImage from "../../../../components/ButtonImage";
import SendPlainte from "../../../../usecases/Plainte/SendPlainte";

const DepotPlainteForm = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [successM, setSuccessM] = useState(false);
  const [errorM, setErrorM] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const video = "/assets/videos/videoMGP.mp4";
  const initialValues = {
    region: "",
    district: "",
    commune: "",
    fokontany: "",
    nom_plaignant: "",
    contact_plaignant: "",
    categorie: "",
    nature: "",
    description: "",
  };
  const validationSchema = Yup.object({
    region: Yup.string().required("Champ obligatoire"),
    district: Yup.string().required("Champ obligatoire"),
    commune: Yup.string().required("Champ obligatoire"),
    fokontany: Yup.string().required("Champ obligatoire"),
    nom_plaignant: Yup.string().required("Champ obligatoire"),
    contact_plaignant: Yup.string().required("Champ obligatoire"),
    categorie: Yup.string().required("Champ obligatoire"),
    nature: Yup.string().required("Champ obligatoire"),
    description: Yup.string().required("Champ obligatoire"),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    if (isRecaptchaVerified) {
      const retour = await new SendPlainte().execute(values);
      if (retour.result.success) {
        setSuccessM(false);
        setErrorM("");
        resetForm();
        setSuccessM(true);
      } else {
        setErrorM("Echec de l'envoi du formulaire");
      }
    } else {
      setErrorM(
        "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire."
      );
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.load(); // Recharge la vidéo
      videoRef.current.play(); // Lance la vidéo après le rechargement
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="my-2 flex justify-center w-[300px] lg:w-2/3 h-full">
          <img
            src="/assets/images/gestionPlainte.PNG"
            alt="rectangle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="my-2 flex justify-center w-[300px] lg:w-2/3 h-full">
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div
          className="flex flex-col lg:flex-row justify-center w-full"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
          }}
        >
          <div className="flex justify-center bg-green text-white font-bold text-sm lg:text-xl w-full h-full p-4">
            <p className="flex justify-center items-center">{t("NumVert")}</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center bg-white text-green font-bold text-sm lg:text-xl w-full h-full p-4">
            <div className="flex flex-col gap-2">
              <p
                className="flex items-center justify-center font-bold text-lg lg:text-2xl"
                style={{ fontFamily: "quicksand" }}
              >
                UNGP
              </p>
              <p className="flex justify-center items-center">
                +261 32 32 035 27
              </p>
              <p className="flex justify-center items-center">
                +261 33 65 004 40
              </p>
              <p className="flex justify-center items-center">
                +261 34 30 815 40
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center bg-white text-green font-bold text-sm lg:text-xl w-full h-full p-4">
            <div className="flex flex-col gap-2">
              <p
                className="flex items-center justify-center font-bold text-lg lg:text-2xl"
                style={{ fontFamily: "quicksand", whiteSpace: "nowrap" }}
              >
                ATSIMO ANDREFANA
              </p>
              <p className="flex justify-center items-center">
                +261 32 32 035 28
              </p>
              <p className="flex justify-center items-center">
                +261 33 65 004 41
              </p>
              <p className="flex justify-center items-center">
                +261 34 30 815 50
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center bg-white text-green font-bold text-sm lg:text-xl w-full h-full p-4">
            <div className="flex flex-col gap-2">
              <p
                className="flex items-center justify-center font-bold text-lg lg:text-2xl"
                style={{ fontFamily: "quicksand", whiteSpace: "nowrap" }}
              >
                ANDROY
              </p>
              <p className="flex justify-center items-center">
                +261 32 32 035 29
              </p>
              <p className="flex justify-center items-center">
                +261 33 65 004 42
              </p>
              <p className="flex justify-center items-center">
                +261 34 30 815 70
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center bg-white text-green font-bold text-sm lg:text-xl w-full h-full p-4">
            <div className="flex flex-col gap-2">
              <p
                className="flex items-center justify-center font-bold text-lg lg:text-2xl"
                style={{ fontFamily: "quicksand", whiteSpace: "nowrap" }}
              >
                ANOSY
              </p>
              <p className="flex justify-center items-center">
                +261 32 32 035 30
              </p>
              <p className="flex justify-center items-center">
                +261 33 65 004 43
              </p>
              <p className="flex justify-center items-center">
                +261 34 30 815 90
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto bg-grey w-[300px] lg:w-[800px] p-4 my-2">
        <div className=" flex justify-center w-full  mx-4 my-2">
          <div className="flex justify-center">
            <h1 className="text-black text-center text-md lg:text-4xl font-bold my-2 mx-4">
              FORMULAIRE DE PLAINTE{" "}
            </h1>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="region"
              >
                Région <span className="text-red">*</span> :
              </label>
              <Field
                name="region"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="region"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="district"
              >
                District <span className="text-red">*</span> :
              </label>
              <Field
                name="district"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="district"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="commune"
              >
                Commune <span className="text-red">*</span> :
              </label>
              <Field
                name="commune"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="commune"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="quartier"
              >
                Quartier <span className="text-red">*</span> :
              </label>
              <Field
                name="fokontany"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="fokontany"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="nom_plaignant"
              >
                Nom du plaignant <span className="text-red">*</span> :
              </label>
              <Field
                name="nom_plaignant"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="nom_plaignant"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="contact_plaignant"
              >
                Contact du plaignant <span className="text-red">*</span> :
              </label>
              <Field
                name="contact_plaignant"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="contact_plaignant"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="categorie"
              >
                Catégorie <span className="text-red">*</span> :
              </label>
              <Field
                as="select"
                name="categorie"
                className="shadow cursor-pointer appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>
                  Sélectionnez une catégorie
                </option>
                <option value="PERSONNE PHYSIQUE">PERSONNE PHYSIQUE</option>
                <option value="PERSONNE MORALE">PERSONNE MORALE</option>
              </Field>
              <ErrorMessage
                name="categorie"
                component="div"
                className="text-red text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="nature"
              >
                Nature <span className="text-red">*</span> :
              </label>
              <Field
                name="nature"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="nature"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description <span className="text-red">*</span> :
              </label>
              <Field
                name="description"
                as="textarea"
                rows="5"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <ReCAPTCHA
              sitekey="6Le4JgYpAAAAAE0wUbkl3fdDcd9cCNL9TljiIRnQ"
              onChange={(value) => setIsRecaptchaVerified(true)}
            />
            <div className="flex justify-center">
              <ButtonImage type="submit" src="BtnSend" />
            </div>
            {successM && (
              <div className="my-2">
                <Alert severity="success">Votre plainte a été envoyer</Alert>
              </div>
            )}
            {errorM && (
              <div className="my-2">
                <Alert severity="error">{errorM}</Alert>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default DepotPlainteForm;

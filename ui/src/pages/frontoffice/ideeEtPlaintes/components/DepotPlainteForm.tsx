import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import ButtonImage from "../../../../components/ButtonImage";
import SendMailDepotPlainte from "../../../../usecases/Email/SendMailDepotPlainte";
import SendMailRetourPlainte from "../../../../usecases/Email/SendMailRetourPlainte";

const DepotPlainteForm = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [successM, setSuccessM] = useState(false);
  const video = "/assets/videos/videoMGP.mp4";
  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    message: "",
  };
  const validationSchema = Yup.object({
    nom: Yup.string(),
    prenom: Yup.string(),
    email: Yup.string().email("Email invalide"),
    tel: Yup.string(),
    message: Yup.string(),
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = async (values: any, { resetForm }: any) => {
    const sendMailValues = {
      nom: values.nom,
      prenom: values.prenom,
      tel: values.tel,
      email: values.email,
      plainte: values.message,
    };

    await new SendMailDepotPlainte().execute(sendMailValues);
    await new SendMailRetourPlainte().execute(sendMailValues.email);
    setSuccessM(false);
    resetForm();
    setSuccessM(true);
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.load(); // Recharge la vidéo
      videoRef.current.play(); // Lance la vidéo après le rechargement
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="my-2 flex justify-center">
        <img src="/assets/images/gestionPlainte.PNG" alt="rectangle" />
      </div>

      <div className="my-2 flex justify-center">
        <video
          ref={videoRef}
          width="1000"
          height="1000"
          controls
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="mx-auto bg-grey w-[800px] p-4 my-2">
        <div className=" flex justify-center w-full  mx-4 my-2">
          <div className="text-center">
            <h1 className="text-black text-xs lg:text-4xl font-bold my-2 mx-4">
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
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <label
                  className="block text-black/70 text-sm font-bold mb-2"
                  htmlFor="quartier"
                >
                  Quartier <span className="text-red">*</span> :
                </label>
                <Field
                  name="quartier"
                  type="text"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="quartier"
                  component="div"
                  className="text-red text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-black/70 text-sm font-bold mb-2"
                  htmlFor="commune"
                >
                  {t("commune")} <span className="text-red">*</span>:
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
                  htmlFor="dateplainte"
                >
                  DATE DE LA PLAINTE<span className="text-red">*</span> :
                </label>
                <Field
                  name="dateplainte"
                  type="date"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="dateplainte"
                  component="div"
                  className="text-red text-xs italic"
                />
              </div>
            </div>
            <div className="font-bold ml-8 my-4">
              <h1> 1- Le plaignant (facultatif) :</h1>
            </div>

            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="nom"
              >
                Nom et prénoms <span className="text-red">*</span> :
              </label>
              <Field
                // placeholder="Votre nom"
                name="nom"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="nom"
                component="div"
                className="text-red text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email <span className="text-red">*</span> :
              </label>
              <Field
                // placeholder="Votre email"
                name="email"
                type="email"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="cin"
              >
                N° CIN <span className="text-red">*</span> :
              </label>
              <Field
                name="cin"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="cin"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="tel"
              >
                Téléphone <span className="text-red">*</span> :
              </label>
              <Field
                name="tel"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="tel"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="residence"
              >
                Residence :
              </label>
              <Field
                name="residence"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/70 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="residence"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="font-bold ml-8 my-4">
              <h1> 2-Cause de la plainte : (Cocher la case exacte) :</h1>
            </div>
            <div className="mb-4 ">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="" />}
                  label="Sélection des bénéficiaires"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="" />}
                  label="Corruption"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="" />}
                  label="Abus"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="" />}
                  label="Violence"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="" />}
                  label="Abus sur mineur"
                />
                <div className="flex">
                  <label
                    className="block text-black/70 text-sm font-bold mb-2"
                    htmlFor="autre"
                  >
                    Autres (à préciser) :
                  </label>
                  <TextField id="standard-basic" label="" variant="standard" />
                </div>
              </FormGroup>
            </div>
            <div className="font-bold ml-8 my-4">
              <h1> 3 - Explication de la plainte :</h1>
            </div>
            <div className="mb-6">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="message"
              ></label>
              <Field
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
            <div className="font-bold ml-8 my-4">
              <h1> 4- Plainte contre :</h1>
            </div>
            <div className="mb-6">
              <label
                className="block text-black/70 text-sm font-bold mb-2"
                htmlFor="message"
              ></label>
              <Field
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
              <ButtonImage type="submit" src="BtnSend" />
            </div>
            {successM && (
              <div className="my-2">
                <Alert severity="success">Votre plainte a été envoyer</Alert>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default DepotPlainteForm;

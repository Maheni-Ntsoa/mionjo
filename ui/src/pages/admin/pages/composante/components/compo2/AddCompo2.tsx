import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import SaveGenerale from "../../../../../../usecases/Generale/SaveGenerale";
import CreateManyPhoto from "../../../../../../usecases/Photo/photo";

interface AddCompo2Props {
  refetch: () => void;
  onClose: () => void;
}
const AddCompo2: React.FC<AddCompo2Props> = ({ refetch, onClose }) => {
  const initialValues = { titre: "", contenu: "" };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
  });
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 6;
    values.idrubrique = 23;
    const data = await new SaveGenerale().execute(values);
    const docValue = {
      files: selectedPhoto,
      generale: data.data,
    };
    await new CreateManyPhoto().execute(docValue);
    resetForm();
    refetch();
    setIsSuccess(true);
    // onClose();
  };

  return (
    <div className="px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="p-8">
            {isSuccess && <Alert severity="success"> Enregistré !</Alert>}
            <div className="mb-4">
              <Field
                placeholder="Titre"
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
            <div className="my-8">
              <label className="cursor-pointer w-full items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  className="sr-only"
                  type="file"
                  id="photo"
                  name="photo"
                  accept="photo/*"
                  multiple // Permet de sélectionner plusieurs fichiers
                  onChange={(event) => {
                    // Récupérez la liste des fichiers sélectionnés
                    const selectedPhoto: any = event.target.files;
                    setSelectedPhoto(selectedPhoto);
                  }}
                />
                <div className="flex justify-between w-full">
                  <p>{`${
                    selectedPhoto.length > 0
                      ? selectedPhoto.length + " fichier(s) séléctionné(s)"
                      : "Importer d'image"
                  }`}</p>
                  <UploadFileIcon />
                </div>
              </label>
            </div>
            <div className="mb-6">
              {/* Utilisez ReactQuill à la place de Field pour le texte */}
              <ReactQuill
                className=""
                value={values.contenu}
                onChange={(value) => handleChange("contenu")(value)}
                placeholder="Contenu"
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline", "strike"],

                    [{ align: [] }],
                    [{ color: [] }, { background: [] }],
                    ["blockquote"],
                    ["code-block"],
                    ["formula"],
                    ["clean"], // Pour supprimer la mise en forme
                  ],
                }}
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

export default AddCompo2;

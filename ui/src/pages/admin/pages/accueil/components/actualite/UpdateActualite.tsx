import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import UpdateGenerale from "../../../../../../usecases/Generale/UpdateGenerale";
import CreateManyPhoto from "../../../../../../usecases/Photo/photo";

interface UpdateActualiteProps {
  actualite: any;
  onClose: any;
  buttonActiver: boolean;
  refetch: () => void;
}

const UpdateActualite: React.FC<UpdateActualiteProps> = ({
  actualite,
  buttonActiver,
  onClose,
  refetch,
}) => {
  const [actu, setActu] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    if (actualite) {
      setActu(actualite);
    }
  }, []);

  const initialValues = {
    titre: `${actualite.titre ? actualite.titre : ""}`,
    contenu: `${actualite.contenu ? actualite.contenu : ""}`,
    files: [],
  };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 1;
    values.idrubrique = 1;
    values.id = actualite.id;

    await new UpdateGenerale().execute(values);
    const docValue = {
      files: selectedFiles,
      generale: { id: actualite.id },
    };
    await new CreateManyPhoto().execute(docValue);
    resetForm();
    refetch();
    setIsSuccess(true);

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
              <Alert severity="success"> Modification réussi!</Alert>
            )}
            <div className="mb-4">
              <Field
                value={values.titre}
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
              <label className="cursor-pointer items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  className="sr-only"
                  type="file"
                  id="files"
                  name="files"
                  accept="image/*"
                  // accept=".pdf, .doc, .docx, .txt, .xls, .xlsx, .ppt, .pptx, .csv, .xml, .json, .html, .css, .js, .ts, .zip, .rar"
                  multiple // Permet de sélectionner plusieurs fichiers
                  onChange={(event) => {
                    // Récupérez la liste des fichiers sélectionnés
                    const selectedFiles: any = event.target.files;
                    setSelectedFiles(selectedFiles);
                  }}
                />
                <div className="flex justify-between w-full">
                  <p>{`${
                    selectedFiles.length > 0
                      ? selectedFiles.length + " image(s) séléctionné(s)"
                      : "Importation des images"
                  }`}</p>
                  <UploadFileIcon />
                </div>
              </label>
              <ErrorMessage
                name="files"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-6">
              {/* Utilisez ReactQuill à la place de Field pour le contenu */}
              <ReactQuill
                className=""
                value={values.contenu}
                onChange={(values) => handleChange("contenu")(values)}
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
                    ["clean"],
                  ],
                }}
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

export default UpdateActualite;

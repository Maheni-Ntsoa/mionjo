import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import CreateManyDoc from "../../../../usecases/Document/CreateMany";
import SaveGenerale from "../../../../usecases/Generale/SaveGenerale";

interface AddDocProps {
  onclose: any;
  refetch: () => void;
}

const AddDoc: React.FC<AddDocProps> = ({ onclose, refetch }) => {
  const initialValues = { titre: "", contenu: "", files: [], typeDocument: "" };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
    // typeDocument: Yup.string(),
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 7;
    values.idrubrique = 27;
    const data = await new SaveGenerale().execute(values);
    const docValue = {
      files: selectedFiles,
      generale: data.data,
      typeDocument: values.typedocument,
    };
    await new CreateManyDoc().execute(docValue);
    refetch();
    setIsSuccess(true);
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
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="titre"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="my-8">
              <label className="cursor-pointer w-full items-center flex shadow appearance-none rounded py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  className="sr-only"
                  type="file"
                  id="files"
                  name="files"
                  // accept="image/*"
                  accept=".pdf, .doc, .docx, .txt, .xls, .xlsx, .ppt, .pptx, .csv, .xml, .json, .html, .css, .js, .ts, .zip, .rar"
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
                      : "Importation des documents"
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

export default AddDoc;

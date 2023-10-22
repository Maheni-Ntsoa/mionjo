import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import CreateManyDoc from "../../../../../../usecases/Document/CreateMany";
import SaveGenerale from "../../../../../../usecases/Generale/SaveGenerale";

interface AddObjectifProps {
  refetch: () => void;
  onClose: () => void;
}
const AddService: React.FC<AddObjectifProps> = ({ refetch, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  const initialValues = {
    titre: "",
    datelimit: moment().format("YYYY-MM-DDTHH:mm"),
    files: [],
  };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    datelimit: Yup.string(),
    // photo: Yup.string(),
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onSubmit = async (values: any, { resetForm }: any) => {
    values.idcategorie = 4;
    values.idrubrique = 17;
    const data = await new SaveGenerale().execute(values);
    const docValue = {
      files: selectedFiles,
      generale: data.data,
      typeDocument: values.typeDocument,
    };
    await new CreateManyDoc().execute(docValue);
    resetForm();
    refetch();
    setIsSuccess(true);
    // onClose();
  };

  return (
    <div className="px-4">
      <div className="px-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="p-8">
              {isSuccess && <Alert severity="success">Enregistré !</Alert>}
              <div className="mb-4">
                <Field
                  placeholder="Nom de l'annonce"
                  name="titre"
                  type="text"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <Field
                  placeholder="Date limite"
                  name="datelimit"
                  type="datetime-local"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="my-8">
                <label className="cursor-pointer w-full items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
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
                        : "Importation du document"
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
    </div>
  );
};

export default AddService;

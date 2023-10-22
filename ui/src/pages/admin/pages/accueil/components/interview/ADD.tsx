import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import Loading from "../../../../../../components/Loading";
import CreateManyDoc from "../../../../../../usecases/Document/CreateMany";
import SaveInterview from "../../../../../../usecases/Generale/SaveInterview";
import CreateManyPhoto from "../../../../../../usecases/Photo/photo";

interface ADDIProps {
  idCategorie: number;
  idRubrique: number;
  refetch: () => void;
}

const ADDI: React.FC<ADDIProps> = ({ idCategorie, idRubrique, refetch }) => {
  let initialValues;
  if (idCategorie === 4 || idCategorie === 7) {
    initialValues = {
      titre: "",
      contenu: "",
      titreen: "",
      contenuen: "",
      datelimit: moment().format("YYYY-MM-DDTHH:mm"),
      datecreation: moment().format("YYYY-MM-DDTHH:mm"),
      files: [],
      typeDocument: "",
    };
  } else {
    initialValues = {
      titre: "",
      contenu: "",
      titreen: "",
      contenuen: "",
      files: [],
      typeDocument: "",
      datecreation: moment().format("YYYY-MM-DDTHH:mm"),
    };
  }
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
    titreen: Yup.string(),
    contenuen: Yup.string(),
    datelimit: Yup.string(),
    datecreation: Yup.string(),
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    setIsError(false);
    setIsSuccess(false);
    values.idcategorie = idCategorie;
    values.idrubrique = idRubrique;
    const data = await new SaveInterview().execute(values);
    if (!data.data) {
      setIsError(true);
    } else {
      const docValue = {
        files: selectedFiles,
        generale: data.data,
      };
      if (idCategorie === 4 || idCategorie === 7) {
        await new CreateManyDoc().execute(docValue);
      } else {
        await new CreateManyPhoto().execute(docValue);
      }
      resetForm();
      refetch();
      setIsSuccess(true);
    }
    setLoading(false);
  };

  return (
    <div className="px-4">
      <div className="flex justify-center">
        <p className="text-yellow text-xl font-bold">Ajout</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="p-8">
            <div className="mb-4">
              <Field
                placeholder="Titre en Français"
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
            <div className="mb-4">
              <Field
                placeholder="Titre en anglais"
                name="titreen"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="titreen"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label className="text-black/40 ml-2">Date</label>
              <Field
                placeholder="Date"
                name="datecreation"
                type="datetime-local"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {idCategorie === 4 && (
              <div className="mb-4">
                <label className="text-black/40 ml-2">Date de cloture</label>
                <Field
                  placeholder="Date limite"
                  name="datelimit"
                  type="datetime-local"
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
            <div className="my-8">
              <label className="cursor-pointer items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
                {idCategorie === 4 || idCategorie === 7 ? (
                  <input
                    className="sr-only"
                    type="file"
                    id="files"
                    name="files"
                    accept=".pdf, .doc, .docx, .txt, .xls, .xlsx, .ppt, .pptx, .csv, .xml, .json, .html, .css, .js, .ts, .zip, .rar"
                    multiple
                    onChange={(event) => {
                      const selectedFiles: any = event.target.files;
                      setSelectedFiles(selectedFiles);
                    }}
                  />
                ) : (
                  <input
                    className="sr-only"
                    type="file"
                    id="files"
                    name="files"
                    accept="image/*"
                    multiple
                    onChange={(event) => {
                      const selectedFiles: any = event.target.files;
                      setSelectedFiles(selectedFiles);
                    }}
                  />
                )}
                <div className="flex justify-between w-full">
                  <p>{`${
                    selectedFiles.length > 0
                      ? selectedFiles.length + " fichier(s) séléctionné(s)"
                      : "Importations"
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
            <div className="flex justify-between gap-2 mb-6">
              <div className="">
                <ReactQuill
                  className=""
                  value={values.contenu}
                  onChange={(value) => handleChange("contenu")(value)}
                  placeholder="Contenu en Français"
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
              <div className="">
                <ReactQuill
                  className=""
                  value={values.contenuen}
                  onChange={(value) => handleChange("contenuen")(value)}
                  placeholder="Contenu en anglais"
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
            </div>
            <div className="flex justify-center">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <Button variant="contained" type="submit">
                  Enregistrer
                </Button>
              )}
            </div>
            {isSuccess && (
              <div className="my-2">
                <Alert severity="success">Enregistré !</Alert>
              </div>
            )}
            {isError && (
              <div className="my-2">
                <Alert severity="error">
                  Il y a une erreur, veuillez reessayer !
                </Alert>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ADDI;

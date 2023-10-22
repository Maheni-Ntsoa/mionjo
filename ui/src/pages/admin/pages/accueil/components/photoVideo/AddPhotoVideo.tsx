import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import { Form, Formik } from "formik";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Button from "../../../../../../components/Button";
import Loading from "../../../../../../components/Loading";
import CreateManyPhoto from "../../../../../../usecases/Photo/photo";

interface AddPhotoVideoProps {
  onclose: any;
  refetch: () => void;
}

const AddPhotoVideo: React.FC<AddPhotoVideoProps> = ({ onclose, refetch }) => {
  const initialValues = { files: [], video: [] };
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  const onSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    const photoValue = {
      files: selectedFiles,
      generale: { id: 0 },
    };
    await new CreateManyPhoto().execute(photoValue);

    resetForm();
    refetch();
    setIsSuccess(true);
    setLoading(false);
    // onclose();
  };

  return (
    <div className="px-4">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="p-8">
          {isSuccess && <Alert severity="success"> Enregistré !</Alert>}
          <div className="my-8">
            <label className="cursor-pointer items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
              <input
                className="sr-only"
                type="file"
                id="files"
                name="files"
                accept="image/*"
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
          </div>
          {loading ? (
            <Loading isLoading={loading} />
          ) : (
            <div className="flex justify-center">
              <Button
                name="Enregistrer"
                type="submit"
                className="border-white border"
              />
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default AddPhotoVideo;

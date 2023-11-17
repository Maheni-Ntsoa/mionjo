import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import Button from "../../../../../../components/Button";
import Loading from "../../../../../../components/Loading";
import CreateManyStatPlaintePhoto from "../../../../../../usecases/Photo/CreateManyStatPlainte";

interface AddStatiGestionPlainteProps {
  onclose: any;
  refetch: () => void;
}

const AddStatiGestionPlainte: React.FC<AddStatiGestionPlainteProps> = ({
  onclose,
  refetch,
}) => {
  const initialValues = { files: [], evenement: "" };
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

  const validationSchema = Yup.object({
    evenement: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    setIsSuccess(false);
    setLoading(true);
    const photoValue = {
      files: selectedFiles,
      generale: { id: 1 },
      evenement: values.evenement,
    };
    await new CreateManyStatPlaintePhoto().execute(photoValue);

    resetForm();
    refetch();
    setIsSuccess(true);
    setLoading(false);
    // onclose();
  };

  return (
    <div className="px-4">
      <div className="flex justify-center">
        <Alert severity="info">
          Veuillez entrer tous les images correspondant a l'événement !
        </Alert>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="p-8">
          {isSuccess && <Alert severity="success"> Enregistré !</Alert>}
          <div className="my-8">
            <Field
              placeholder="Nom de l'événement"
              name="evenement"
              type="text"
              className="shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="evenement"
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

export default AddStatiGestionPlainte;

// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import Alert from "@mui/material/Alert";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Importez la feuille de style CSS
// import * as Yup from "yup";
// import Button from "../../../../../../components/Button";
// import SaveGenerale from "../../../../../../usecases/Generale/SaveGenerale";
// import CreateManyPhoto from "../../../../../../usecases/Photo/photo";

// interface AddEvenementProps {
//   onclose: any;
//   refetch: () => void;
// }

// const AddStatiGestionPlainte: React.FC<AddEvenementProps> = ({
//   onclose,
//   refetch,
// }) => {
//   const initialValues = { titre: "", contenu: "" };
//   const validationSchema = Yup.object({
//     titre: Yup.string(),
//     contenu: Yup.string(),
//   });
//   const [selectedPhoto, setSelectedPhoto] = useState([]);
//   const [isSuccess, setIsSuccess] = useState(false); // État du succès du formulaire

//   const onSubmit = async (values: any, { resetForm }: any) => {
//     values.idcategorie = 5;
//     values.idrubrique = 21;
//     const data = await new SaveGenerale().execute(values);
//     const docValue = {
//       files: selectedPhoto,
//       generale: data.data,
//     };
//     await new CreateManyPhoto().execute(docValue);
//     resetForm();
//     refetch();
//     setIsSuccess(true);
//   };

//   return (
//     <div className="px-4">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ values, handleChange }) => (
//           <Form className="p-8">
//             {isSuccess && <Alert severity="success"> Enregistré !</Alert>}
//             <div className="mb-4">
//               <Field
//                 placeholder="Titre"
//                 name="titre"
//                 type="text"
//                 className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//               <ErrorMessage
//                 name="titre"
//                 component="div"
//                 className="text-red text-xs italic"
//               />
//             </div>
//             <div className="my-8">
//               <label className="cursor-pointer w-full items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
//                 <input
//                   className="sr-only"
//                   type="file"
//                   id="photo"
//                   name="photo"
//                   accept="photo/*"
//                   multiple // Permet de sélectionner plusieurs fichiers
//                   onChange={(event) => {
//                     // Récupérez la liste des fichiers sélectionnés
//                     const selectedPhoto: any = event.target.files;
//                     setSelectedPhoto(selectedPhoto);
//                   }}
//                 />
//                 <div className="flex justify-between w-full">
//                   <p>{`${selectedPhoto.length > 0
//                       ? selectedPhoto.length + " fichier(s) séléctionné(s)"
//                       : "Importer d'image"
//                     }`}</p>
//                   <UploadFileIcon />
//                 </div>
//               </label>
//             </div>
//             <div className="mb-6">
//               {/* Utilisez ReactQuill à la place de Field pour le texte */}
//               <ReactQuill
//                 className=""
//                 value={values.contenu}
//                 onChange={(value) => handleChange("contenu")(value)}
//                 placeholder="Contenu"
//                 modules={{
//                   toolbar: [
//                     [{ header: "1" }, { header: "2" }],
//                     [{ list: "ordered" }, { list: "bullet" }],
//                     ["bold", "italic", "underline", "strike"],

//                     [{ align: [] }],
//                     [{ color: [] }, { background: [] }],
//                     ["blockquote"],
//                     ["code-block"],
//                     ["formula"],
//                     ["clean"], // Pour supprimer la mise en forme
//                   ],
//                 }}
//               />
//             </div>
//             <div className="flex justify-center">
//               <Button
//                 name="Enregistrer"
//                 type="submit"
//                 className="border-white border"
//               />
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddStatiGestionPlainte;

import UploadFileIcon from "@mui/icons-material/UploadFile"
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import Alert from "@mui/material/Alert"
import { ErrorMessage, Field, Form, Formik } from "formik"
import moment from "moment"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import * as Yup from "yup"
import Loading from "../../../../../components/Loading"
import Generalec from "../../../../../models/Generalec"
import CreateManyDoc from "../../../../../usecases/Document/CreateMany"
import UpdateGenerale from "../../../../../usecases/Generale/UpdateGenerale"
import CreateManyPhoto from "../../../../../usecases/Photo/photo"
import CreateManyVideo from "../../../../../usecases/Video/video"

interface UPDATEProps {
  generalec: Generalec
  buttonActiver: boolean
  refetch: () => void
}

const UPDATE: React.FC<UPDATEProps> = ({
  generalec,
  buttonActiver,
  refetch,
}) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [selectedVideo, setSelectedVideo] = useState([])
  const [photoOrVideo, setPhotoORVideo] = useState(true)
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(false)

  let initialValues
  if (generalec.idcategorie === 4) {
    initialValues = {
      titre: `${generalec.titre ? generalec.titre : ""}`,
      contenu: `${generalec.contenu ? generalec.contenu : ""}`,
      titreen: `${generalec.titreen ? generalec.titreen : ""}`,
      contenuen: `${generalec.contenuen ? generalec.contenuen : ""}`,
      titremg: `${generalec.titremg ? generalec.titremg : ""}`,
      contenumg: `${generalec.contenumg ? generalec.contenumg : ""}`,
      datelimit: `${
        generalec.datelimit
          ? moment(generalec.datelimit).format("YYYY-MM-DDTHH:mm")
          : ""
      }`,
      datecreation: moment(generalec.datecreation).format("YYYY-MM-DDTHH:mm"),
      files: [],
      titulairemarche: `${
        generalec.titulairemarche ? generalec.titulairemarche : ""
      }`,
      montantmarche: `${
        generalec.montantmarche ? generalec.montantmarche : ""
      }`,
    }
  } else if (generalec.idcategorie === 7) {
    initialValues = {
      titre: `${generalec.titre ? generalec.titre : ""}`,
      contenu: `${generalec.contenu ? generalec.contenu : ""}`,
      titreen: `${generalec.titreen ? generalec.titreen : ""}`,
      contenuen: `${generalec.contenuen ? generalec.contenuen : ""}`,
      titremg: `${generalec.titremg ? generalec.titremg : ""}`,
      contenumg: `${generalec.contenumg ? generalec.contenumg : ""}`,
      datelimit: `${
        generalec.datelimit
          ? moment(generalec.datelimit).format("YYYY-MM-DDTHH:mm")
          : ""
      }`,
      datecreation: moment(generalec.datecreation).format("YYYY-MM-DDTHH:mm"),
      files: [],
    }
  } else {
    initialValues = {
      titre: `${generalec.titre ? generalec.titre : ""}`,
      contenu: `${generalec.contenu ? generalec.contenu : ""}`,
      titreen: `${generalec.titreen ? generalec.titreen : ""}`,
      contenuen: `${generalec.contenuen ? generalec.contenuen : ""}`,
      titremg: `${generalec.titremg ? generalec.titremg : ""}`,
      contenumg: `${generalec.contenumg ? generalec.contenumg : ""}`,
      datecreation: moment(generalec.datecreation).format("YYYY-MM-DDTHH:mm"),
      files: [],
    }
  }

  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
    titreen: Yup.string(),
    contenuen: Yup.string(),
    titremg: Yup.string(),
    contenumg: Yup.string(),
    datelimit: Yup.string(),
    datecreation: Yup.string(),
  })

  const onSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true)
    setIsError(false)
    setIsSuccess(false)
    values.idcategorie = generalec.idcategorie
    values.idrubrique = generalec.idrubrique
    values.id = generalec.id

    try {
      await new UpdateGenerale().execute(values)
      if (photoOrVideo) {
        const docValue = {
          files: selectedFiles,
          generale: { id: generalec.id },
          typeDocument: "",
        }
        const photoValue = {
          files: selectedFiles,
          generale: { id: generalec.id },
        }
        if (generalec.idcategorie === 4 || generalec.idcategorie === 7) {
          await new CreateManyDoc().execute(docValue)
        } else if (photoOrVideo) {
          await new CreateManyPhoto().execute(photoValue)
        }
      } else if (!photoOrVideo) {
        const docValue = {
          files: selectedFiles,
          generale: { id: generalec.id },
          typeDocument: "",
        }
        const videoValue = {
          files: selectedVideo,
          generale: { id: generalec.id },
        }
        if (generalec.idcategorie === 4 || generalec.idcategorie === 7) {
          await new CreateManyDoc().execute(docValue)
        } else if (!photoOrVideo) {
          await new CreateManyVideo().execute(videoValue)
        }
      }
      resetForm()
      refetch()
      setIsSuccess(true)
    } catch (error) {
      setIsError(true)
    }
    setLoading(false)
  }

  return (
    <div className="px-4">
      <div className="flex justify-center">
        <p className="text-yellow text-xl font-bold">Modification</p>
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
            <div className="mb-4">
              <Field
                value={values.titreen}
                name="titreen"
                placeholder="Titre en anglais"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="titreen"
                component="div"
                className="text-red text-xs italic"
              />
            </div>
            <div className="mb-4">
              <Field
                value={values.titremg}
                name="titremg"
                placeholder="Titre en Malagasy"
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="titremg"
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
            {generalec.idcategorie === 4 && (
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
            {generalec.idcategorie === 4 && (
              <>
                <div className="mb-4">
                  <Field
                    placeholder="Entrez le nom de l'adjudicateur"
                    name="titulairemarche"
                    type="text"
                    className="shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="titulairemarche"
                    component="div"
                    className="text-red text-xs italic"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    placeholder="Montant du marché"
                    name="montantmarche"
                    type="text"
                    className="shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="montantmarche"
                    component="div"
                    className="text-red text-xs italic"
                  />
                </div>
              </>
            )}
            <Button
              variant="contained"
              onClick={() => setPhotoORVideo(!photoOrVideo)}
            >
              {photoOrVideo
                ? "Cliquez ici pour importer des videos"
                : "Cliquez ici pour importer autre que videos"}
            </Button>
            {!photoOrVideo && (
              <div className="my-8">
                <label className="cursor-pointer items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
                  <input
                    className="sr-only"
                    type="file"
                    id="video"
                    name="video"
                    accept="video/*"
                    multiple
                    onChange={(event) => {
                      setPhotoORVideo(false)
                      const selectedVideo: any = event.target.files
                      setSelectedVideo(selectedVideo)
                    }}
                  />
                  <div className="flex justify-between w-full">
                    <p>{`${
                      selectedVideo.length > 0
                        ? selectedVideo.length + " vidéo(s) séléctionné(s)"
                        : "Importation des videos"
                    }`}</p>
                    <UploadFileIcon />
                  </div>
                </label>
              </div>
            )}
            {photoOrVideo && (
              <div className="my-8">
                <label className="cursor-pointer items-center flex shadow appearance-none rounded w-full py-2 px-3 text-black/40 leading-tight focus:outline-none focus:shadow-outline">
                  {generalec.idcategorie === 4 ||
                  generalec.idcategorie === 7 ? (
                    <input
                      className="sr-only"
                      type="file"
                      id="files"
                      name="files"
                      accept=".pdf, .doc, .docx, .txt, .xls, .xlsx, .ppt, .pptx, .csv, .xml, .json, .html, .css, .js, .ts, .zip, .rar"
                      multiple
                      onChange={(event) => {
                        setPhotoORVideo(true)
                        const selectedFiles: any = event.target.files
                        setSelectedFiles(selectedFiles)
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
                        const selectedFiles: any = event.target.files
                        setSelectedFiles(selectedFiles)
                      }}
                    />
                  )}
                  <div className="flex justify-between w-full">
                    <p>{`${
                      selectedFiles.length > 0
                        ? selectedFiles.length + " fichier(s) séléctionné(s)"
                        : "Importations fichier(s)"
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
            )}
            {generalec.idcategorie === 7 ? (
              <div className="flex justify-between gap-2 mb-6">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="contenu"
                    name="contenu"
                    value={values.contenu}
                    onChange={(event) =>
                      handleChange("contenu")(event.target.value)
                    }
                  >
                    {[0, 1, 2, 3, 4].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={`Composante ${value + 1}`}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            ) : (
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
                <div className="">
                  <ReactQuill
                    className=""
                    value={values.contenumg}
                    onChange={(value) => handleChange("contenumg")(value)}
                    placeholder="Contenu en Malagasy"
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
            )}
            <div className="flex justify-center">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <Button variant="contained" type="submit">
                  Modifier
                </Button>
              )}
            </div>
            {isSuccess && (
              <div className="my-2">
                <Alert severity="success"> Modifié !</Alert>
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
  )
}

export default UPDATE

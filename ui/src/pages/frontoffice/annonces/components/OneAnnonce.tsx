import { useState } from "react"
import { useTranslation } from "react-i18next"
import ButtonImage from "../../../../components/ButtonImage"
import DetailRectangle from "../../../../components/DetailRectangle"
import Loading from "../../../../components/Loading"
import MyModal from "../../../../components/MyModal"
import Generalec from "../../../../models/Generalec"
import IncreaseInterationalDownload from "../../../../usecases/Generale/IncreaseInterationalDownload"
import IncreaseNationalDownload from "../../../../usecases/Generale/IncreaseNationalDownload"
import { formatDateOnly } from "../../../../utils/formatDate"

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

interface OneAnnonceProps {
  generalec: Generalec
  document: string
  popup?: boolean
}

const OneAnnonce: React.FC<OneAnnonceProps> = ({
  generalec,
  document,
  popup,
}) => {
  const { i18n, t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [seeMoreOpen, setSeeMoreOpen] = useState(false)

  const getIP = async (): Promise<string> => {
    const response = await fetch("https://api.ipify.org?format=json")
    const data = await response.json()
    return data.ip
  }

  const getGeoInfo = async (ip: string): Promise<any> => {
    const response = await fetch(`https://ipapi.co/${ip}/json/`)
    const data = await response.json()
    return data
  }

  const handleDownloadClick = async () => {
    setLoading(true)
    const ip: string = await getIP()
    const geoInfo: any = await getGeoInfo(ip)
    const value = {
      idrubrique: generalec.idrubrique,
      id: generalec.id,
    }
    if (geoInfo.country_name === "Madagascar") {
      await new IncreaseNationalDownload().execute(value)
    } else {
      await new IncreaseInterationalDownload().execute(value)
    }
    setLoading(false)
  }

  const handleSeeMoreClose = () => {
    setSeeMoreOpen(false)
  }

  const handleSeeMore = () => {
    setSeeMoreOpen(true)
  }

  return (
    <div className="px-2 w-screen bg-grey py-6 xl:px-60 text-black flex flex-col gap-2">
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            {generalec.titreen && i18n.language === "en" ? (
              <p
                className={`${
                  popup ? "text-sm" : "text-md lg:text-xl uppercase"
                } font-semibold`}
              >
                {generalec.titreen}
              </p>
            ) : generalec.titremg && i18n.language === "mg" ? (
              <p
                className={`${
                  popup ? "text-sm" : "text-md lg:text-xl uppercase"
                } font-semibold`}
              >
                {generalec.titremg}
              </p>
            ) : (
              <p
                className={`${
                  popup ? "text-sm" : "text-md lg:text-xl uppercase"
                } font-semibold`}
              >
                {generalec.titre}
              </p>
            )}
            <div className={`text-sm lg:text-lg italic flex justify-start`}>
              {generalec.etatannonce === 10 ? (
                <p>
                  Adjugé le :{" "}
                  <span>
                    {generalec.datelimit
                      ? formatDateOnly(generalec.datelimit)
                      : "-"}
                  </span>
                </p>
              ) : (
                <p>
                  {t("dateLimite")} :{" "}
                  <span>
                    {generalec.datelimit
                      ? formatDateOnly(generalec.datelimit)
                      : "-"}
                  </span>
                </p>
              )}
            </div>
            {/* <a href="#" className="text-blue text-md">
              En savoir plus...
            </a> */}
            {generalec.etatannonce === 10 ? (
              <>
                <p className="text-sm lg:text-lg">
                  {t("Adjudicateur")} :{" "}
                  <strong>{`${generalec.titulairemarche}`}</strong>
                </p>
                <p className="text-sm lg:text-lg">
                  {t("Montant")} :{" "}
                  <strong>{`${generalec.montantmarche}`}</strong>
                </p>
              </>
            ) : (
              <>
                <p className="text-sm lg:text-lg">
                  {t("nombreTele")}:{" "}
                  <strong>{`${generalec.nbdownnational}`}</strong>
                </p>
                <p className="text-sm lg:text-lg">
                  {t("nombreTeleI")}:{" "}
                  <strong>{`${generalec.nbdowninter}`}</strong>
                </p>
              </>
            )}
          </div>
        </div>
        {loading ? (
          <Loading isLoading={loading} />
        ) : (
          <div className="flex justify-center">
            <div className="flex flex-col gap-2">
              <div className="">
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href={`${process.env.REACT_APP_BACKEND_URL}uploads/documents/${document}`}
                  download={`${process.env.REACT_APP_BACKEND_URL}uploads/documents/${document}`}
                  onClick={handleDownloadClick}
                >
                  <ButtonImage src="BtnDown" width="w-[13rem]" />
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSeeMore}
                  className="font-light w-[10.5rem] py-3 text-sm text-white/60 bg-brown"
                >
                  Voir détails
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <MyModal onClose={handleSeeMoreClose} open={seeMoreOpen}>
        <DetailRectangle generalec={generalec} />
      </MyModal>
    </div>
  )
}

export default OneAnnonce

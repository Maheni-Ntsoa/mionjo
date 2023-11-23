import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import ReactPaginate from "react-paginate"
import { useNavigate } from "react-router-dom"
import Loading from "../../../../components/Loading"
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale"
import GetGeneralecByIdCate from "../../../../usecases/Generalec/GetGeneralecByIdCate"
import { formatDateOnly } from "../../../../utils/formatDate"

const AnnoncePopUp = () => {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [generales, setGenerales] = useState<any[]>([])
  const [pageNumber, setPageNumber] = useState(0)
  const itemsPerPage = 3

  useEffect(() => {
    setLoading(true)
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCate().execute(4)

      if (data) {
        const promises = data.map(async (generale) => {
          const doc = await new GetDocumentByIdGenerale().execute(generale.id!)
          return {
            ...generale,
            doc: doc && doc[0] ? doc[0].nomdocument : "erreur.txt",
          }
        })

        const generalesWithDocs = await Promise.all(promises)
        const datenow = new Date()
        const generalesInProgressAndDated = generalesWithDocs.filter(
          (gen) =>
            gen.datelimit && gen.datelimit.toString() > datenow.toISOString()
        )
        setGenerales(generalesInProgressAndDated)
        setLoading(false)
      }
    }
    fetchGenerale()
  }, [pageNumber])

  const showCategorie = (generale: any) => {
    if (generale.idrubrique === 15) {
      return t("ConsultantIndi")
    }
    if (generale.idrubrique === 16) {
      return t("Founitures")
    }
    if (generale.idrubrique === 17) {
      return t("Services")
    }
    if (generale.idrubrique === 18) {
      return t("Travaux")
    }
    if (generale.idrubrique === 29) {
      return t("ConsultantCab")
    }
  }

  const pageCount = Math.ceil(generales.length / itemsPerPage)

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected)
  }

  return (
    <div className="mt-4 py-2 px-2">
      <div
        className="text-center uppercase text-white text-xl lg:text-2xl my-2 font-bold"
        style={{ font: "quicksand" }}
      >
        {t("Annonces")}
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="mt-4 flex flex-col gap-1 lg:gap-4 justify-center">
          {generales.length === 0 ? (
            <p className="text-white">Aucune annonce pour le moment.</p>
          ) : (
            generales
              .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((generale, index) => (
                <div key={index}>
                  <div
                    className="flex flex-col gap-2 text-white cursor-pointer"
                    key={index}
                    onClick={() =>
                      navigate(`/annonces?tabId=${generale.idrubrique}`)
                    }
                  >
                    {generale.titreen && i18n.language === "en" ? (
                      <p className="text-xs lg:text-md">
                        <span className="uppercase">
                          {showCategorie(generale)}
                        </span>{" "}
                        : {generale.titreen}
                      </p>
                    ) : generale.titremg && i18n.language === "mg" ? (
                      <p className="text-xs lg:text-md">
                        <span className="uppercase">
                          {showCategorie(generale)}
                        </span>{" "}
                        : {generale.titremg}
                      </p>
                    ) : (
                      <p className="text-xs lg:text-md">
                        <span className="uppercase">
                          {showCategorie(generale)}
                        </span>{" "}
                        : {generale.titre}
                      </p>
                    )}
                    <p className="text-center text-xs lg:text-md">
                      Date limite :{" "}
                      <span>
                        {generale.datelimit
                          ? formatDateOnly(generale.datelimit)
                          : "Non definie"}
                      </span>
                    </p>
                  </div>
                  <div className="border-b-2 border-white w-full flex justify-center py-2"></div>
                </div>
              ))
          )}
        </div>
      )}
      {generales.length > itemsPerPage && (
        <div className="my-4">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            previousLabel={
              <img
                src="/assets/icons/ic_paginate-left.svg"
                alt="left"
                width={10}
                height={10}
              />
            }
            nextLabel={
              <img
                src="/assets/icons/ic_paginate-right.svg"
                alt="left"
                width={10}
                height={10}
              />
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      )}
    </div>
  )
}

export default AnnoncePopUp

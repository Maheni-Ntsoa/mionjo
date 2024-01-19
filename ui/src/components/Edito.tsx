import { useTranslation } from "react-i18next"

const Edito = () => {
  const { t } = useTranslation()
  return (
    <div className="h-full w-full p-2 lg:p-12 my-4">
      <div className="flex justify-center gap-6 flex-col lg:flex-row mx-12">
        {/* <div className="flex justify-center items-center">
          <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] mr-4  cursor-pointer object-cover">
            <img
              src="/assets/edito/cn.jpg"
              width="100%"
              height="100%"
              alt="img"
              className="cursor-pointer w-full h-full object-cover"
            />
          </div>
        </div> */}
        <div className="flex justify-center text-justify">
          <div className="flex flex-col gap-2">
            <div className=" flex justify-center text-[0.5rem] md:text-[0.8rem] xl:text-[1rem]">
              {t("edito1")}
            </div>
            <div className=" flex justify-center text-[0.5rem] md:text-[0.8rem] xl:text-[1rem]">
              {t("edito2")}
            </div>
            <div className=" flex justify-center text-[0.5rem] md:text-[0.8rem] xl:text-[1rem]">
              {t("edito3")}
            </div>
            <div
              className="flex justify-end font-semibold"
              style={{ font: "quicksand" }}
            >
              {t("edito4")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edito

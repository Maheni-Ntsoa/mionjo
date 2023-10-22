import { useTranslation } from "react-i18next";
import ButtonImage from "../../../../components/ButtonImage";
import Generalec from "../../../../models/Generalec";
import DownloadFile from "../../../../usecases/Download/DownloadFile";
import IncreaseInterationalDownload from "../../../../usecases/Generale/IncreaseInterationalDownload";
import IncreaseNationalDownload from "../../../../usecases/Generale/IncreaseNationalDownload";
import { formatDateOnly } from "../../../../utils/formatDate";
import { useState } from "react";
import Loading from "../../../../components/Loading";

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

interface OneAnnonceProps {
  generalec: Generalec;
  document: string;
  popup?: boolean;
}

const OneAnnonce: React.FC<OneAnnonceProps> = ({
  generalec,
  document,
  popup,
}) => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false)

  const getIP = async (): Promise<string> => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  };

  const getGeoInfo = async (ip: string): Promise<any> => {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    return data;
  };

  const handleDownloadClick = async () => {
    setLoading(true)
    const ip: string = await getIP();
    const geoInfo: any = await getGeoInfo(ip);
    const value = {
      idrubrique: generalec.idrubrique,
      id: generalec.id,
    };
    if (geoInfo.country_name === "Madagascar") {
      await new IncreaseNationalDownload().execute(value);
    } else {
      await new IncreaseInterationalDownload().execute(value);
    }
    await new DownloadFile().execute(document);
    setLoading(false)
  };

  return (
    <div className=" w-screen h-44 bg-grey py-6 xl:px-60 text-black flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <div className="flex flex-col">
            {generalec.titreen && i18n.language === "en" ? (
              <p className={`${popup ? "text-sm" : "text-xl uppercase"} font-semibold`}>
                {generalec.titreen}
              </p>
            ) : (
              <p className={`${popup ? "text-sm" : "text-xl uppercase"} font-semibold`}>
                {generalec.titre}
              </p>
            )}
            <div
              className={`text-lg italic flex justify-start`}
            >
              <p>
                Date limite :{" "}
                <span>
                  {generalec.datelimit
                    ? formatDateOnly(generalec.datelimit)
                    : "Non definie"}
                </span>
              </p>
            </div>
            <a href="#" className="text-blue text-md">En savoir plus...</a>
          </div>
        </div>
        {loading ? (<Loading isLoading={loading} />) : (
          <div className="flex items-center">
            <ButtonImage
              src="BtnDown"
              onClick={handleDownloadClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OneAnnonce;

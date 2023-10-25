import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col lg:flex-row gap-6 justify-center items-center text-white bg-brown py-12 pt-24 px-8 font-proximaNova">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex lg:flex-row justify-center w-full gap-10">
          <div className="flex justify-start">
            <div className="flex flex-col gap-2">
              <h2
                className="uppercase font-semibold text-lg lg:text-2xl"
                style={{ font: "quicksand" }}
              >
                <Link to="/">{t("Accueil")}</Link>
              </h2>
              <div className="">
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link className="hover:text-yellow" to="/#composantes">
                    {t("Composantes")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/#actualites">
                    {t("Actu")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/#events">
                    {t("Evénements")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/#imgvideos">
                    {t("Galerie")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link className="hover:text-yellow" to="/#usefullinks">
                    {t("LiensUtiles")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/#usefullinks">
                    {t("NousContacter")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col gap-2">
              <h2
                className="uppercase font-semibold text-lg lg:text-2xl"
                style={{ font: "quicksand" }}
              >
                {t("Apropos")}
              </h2>
              <div className="">
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link
                    className="hover:text-yellow"
                    to="/apropos/#description"
                  >
                    {" "}
                    {t("Description")}{" "}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/apropos/#objectifs">
                    {t("Objectifs")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/apropos/#approches">
                    {t("Approches")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link
                    className="hover:text-yellow"
                    to="/apropos/#zoneintervention"
                  >
                    {t("Zones")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col gap-2">
              <h2
                className="uppercase font-semibold text-lg lg:text-2xl"
                style={{ font: "quicksand" }}
              >
                {t("Realisations")}
              </h2>
              <div className="">
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link
                    className="hover:text-yellow"
                    to="/activites/#composante"
                  >
                    {t("ReaParCompo")}
                  </Link>
                </p>
                {/* <p className="font-light text-xs lg:text-base" style={{whiteSpace: "nowrap"}}>
                  <Link className="hover:text-yellow" to="/activites/#localite">
                    {t("ReaParLoc")}
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col gap-2">
              <h2
                className="uppercase font-semibold text-lg lg:text-2xl"
                style={{ font: "quicksand" }}
              >
                {t("Annonces")}
              </h2>
              <div className="">
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link className="hover:text-yellow" to="/annonces?tabId=15">
                    {t("ConsultantIndi")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link className="hover:text-yellow" to="/annonces?tabId=29">
                    {t("ConsultantCab")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link className="hover:text-yellow" to="/annonces?tabId=16">
                    {t("Fournitures")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/annonces?tabId=17">
                    {t("Services")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link className="hover:text-yellow" to="/annonces?tabId=18">
                    {t("Travaux")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col gap-2">
              <h2
                className="uppercase font-semibold text-lg lg:text-2xl"
                style={{ font: "quicksand" }}
              >
                {t("IdeePlaintes")}
              </h2>
              <div className="">
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link
                    className="hover:text-yellow"
                    to="/ideeplaintes/#ideeSud"
                  >
                    {t("IdeeSud")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Link
                    className="hover:text-yellow"
                    to="/ideeplaintes/#deposer"
                  >
                    {t("DepPlaintes")}
                  </Link>
                </p>
                <p
                  className="font-light text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {" "}
                  <Link className="hover:text-yellow" to="/ideeplaintes/#stats">
                    {t("StatPlaintes")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col gap-2">
              <h2
                className="uppercase font-semibold text-lg lg:text-2xl"
                style={{ font: "quicksand" }}
              >
                <Link to="https://mapmionjo.ankobabeach.mg/" target="_blank">
                  {t("Cartographie")}
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex space-x-4 p-2 rounded">
              <a href=" https://www.threads.net/@projet_mionjo">
                {" "}
                <img
                  src="/assets/icons/ic_r2.svg"
                  alt="threads"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href=" https://x.com/Projet_Mionjo?s=08"
                className="flex items-center"
              >
                <img
                  src="/assets/icons/ic_r5.png"
                  alt="twitter"
                  width={25}
                  height={25}
                />
              </a>
              <img
                src="/assets/icons/ic_r4.svg"
                alt="linkedin"
                width={32}
                height={32}
              />
            </div>
            <div className="text-white text-center">&copy; Copyright 2023</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import SearchButton from "../SearchButton";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [openLink, setOpenLink] = useState<string | null>(null);
  const subLinkRef = useRef<HTMLUListElement>(null);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  const toggleState = (state: string | null) => {
    if (isMobile) {
      // Sur les appareils mobiles, permettre au sous-menu de rester ouvert après un clic
      setOpenLink(state);
    } else {
      // Sur les ordinateurs de bureau, utiliser le comportement existant
      if (state === openLink) {
        setOpenLink(null);
      } else {
        setOpenLink(state);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subLinkRef.current &&
        !subLinkRef.current.contains(event.target as Node)
      ) {
        setOpenLink(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full shadow-brown drop-shadow-lg sticky top-0 z-20 bg-brown">
      <div className="justify-between mx-auto lg:items-center lg:flex ">
        <div className="bg-white py-2 px-4">
          <div className="flex justify-between items-center top-0 z-20 py-5 lg:py-4 lg:block">
            <img
              src="/assets/logos/logomionjo.svg"
              alt="logo_mionjo"
              className="cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="lg:hidden md:mr-8">
              <div className="flex flex-col gap-2">
                <SearchButton />
              </div>
            </div>
            <div className="lg:hidden">
              <button
                className="p-2 text-brown rounded-lg outline-none border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-brown"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-brown"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center ml-8 pb-3 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="font-semibold text-brown items-center justify-center lg:flex gap-2 2xl:gap-8">
              <li
                className={`
                   group relative`}
              >
                <button
                  className="flex items-center text-white p-2 rounded hover:bg-black/10"
                  onClick={() => {
                    toggleState("showAccueil");
                  }}
                >
                  <span>
                    <img
                      src="/assets/icons/ic_home.svg"
                      alt="home"
                      height={60}
                      width={60}
                    />
                  </span>
                  <img
                    src="/assets/icons/ic_down.svg"
                    width={25}
                    height={25}
                    alt="icone"
                  />
                </button>
                {"showAccueil" === openLink && (
                  <motion.ul
                    ref={subLinkRef}
                    className={`font-light absolute z-50 p-4 w-max rounded-md left-0 space-y-2 bg-blue text-white`}
                    variants={variants}
                    initial="closed"
                    animate={"showAccueil" === openLink ? "open" : "closed"}
                  >
                    <li>
                      <div
                        className=""
                        // onMouseEnter={() => setOpenComp(true)}
                        // onMouseLeave={() => setOpenComp(false)}
                      >
                        <div className="flex items-center">
                          <span
                            className="font-quicksand text-md uppercase"
                            style={{ font: "quicksand" }}
                          >
                            {t("Composantes")} :
                          </span>
                          {/* <button onClick={() => setOpenComp(!openComp)}>
                            <img
                              src="/assets/icons/ic_down.svg"
                              width={25}
                              height={25}
                              alt="icone"
                            />
                          </button> */}
                        </div>
                        {/* {openComp || isMobile ? ( */}
                        <div className={`flex justify-start`}>
                          <ul className="ml">
                            <li className="flex">
                              <img
                                src="/assets/icons/ic_dropup.svg"
                                width={25}
                                height={25}
                                alt="icone"
                              />
                              <Link
                                className="hover:text-yellow text-lg"
                                to="/#composantes"
                              >
                                {t("C1")}
                              </Link>
                            </li>
                            <li className="flex">
                              <img
                                src="/assets/icons/ic_dropup.svg"
                                width={25}
                                height={25}
                                alt="icone"
                              />
                              <Link
                                className="hover:text-yellow text-lg"
                                to="/#composantes"
                              >
                                {t("C2")}
                              </Link>
                            </li>
                            <li className="flex">
                              <img
                                src="/assets/icons/ic_dropup.svg"
                                width={25}
                                height={25}
                                alt="icone"
                              />
                              <Link
                                className="hover:text-yellow text-lg"
                                to="/#composantes"
                              >
                                {t("C3")}
                              </Link>
                            </li>
                            <li className="flex">
                              <img
                                src="/assets/icons/ic_dropup.svg"
                                width={25}
                                height={25}
                                alt="icone"
                              />
                              <Link
                                className="hover:text-yellow text-lg"
                                to="/#composantes"
                              >
                                {t("C4")}
                              </Link>
                            </li>
                            <li className="flex">
                              <img
                                src="/assets/icons/ic_dropup.svg"
                                width={25}
                                height={25}
                                alt="icone"
                              />
                              <Link
                                className="hover:text-yellow text-lg"
                                to="/#composantes"
                              >
                                {t("C5")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* ) : (
                        <></>
                      )} */}
                      </div>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/#actualites"
                      >
                        {t("Actu")}
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow text-lg" to="/#events">
                        {t("Evénements")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/#usefullinks"
                      >
                        {t("LiensUtiles")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/#imgvideos"
                      >
                        {t("Galerie")}
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/#usefullinks"
                      >
                        {t("NousContacter")}
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </li>

              <li
                className={`
                   group relative`}
              >
                <button
                  className="flex items-center text-white px-2 py-2 rounded hover:bg-black/10"
                  onClick={() => {
                    toggleState("showApropos");
                  }}
                >
                  <p
                    className="font-quicksand text-md max-w-fit uppercase"
                    style={{ font: "quicksand", whiteSpace: "nowrap" }}
                  >
                    {t("Apropos")}
                  </p>
                  <img
                    src="/assets/icons/ic_down.svg"
                    width={25}
                    height={25}
                    alt="icone"
                  />
                </button>
                {"showApropos" === openLink && (
                  <motion.ul
                    ref={subLinkRef}
                    className={`font-light absolute z-50 p-4 w-max rounded-md left-0 space-y-2 bg-blue text-white`}
                    variants={variants}
                    initial="closed"
                    animate={"showApropos" === openLink ? "open" : "closed"}
                  >
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/apropos/#description"
                      >
                        {t("Description")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/apropos/#objectifs"
                      >
                        {t("Objectifs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/apropos/#approches"
                      >
                        {t("Approches")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/apropos/#zoneintervention"
                      >
                        {t("Zones")}
                      </Link>
                    </li>
                    {/* <li>
                        <Link
                          className="hover:text-yellow text-lg"
                          to="/apropos/#sudcontexte"
                        >
                          Contexte du Sud
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-yellow text-lg" to="/apropos/#orga">
                          Organisations institutionnelles
                        </Link>
                      </li> */}
                  </motion.ul>
                )}
              </li>

              <li
                className={`
                   group relative`}
              >
                <button
                  className="flex items-center text-white px-2 py-2 rounded hover:bg-black/10"
                  onClick={() => {
                    toggleState("showRealisation");
                  }}
                >
                  <span
                    className="font-quicksand text-md max-w-fit uppercase"
                    style={{ font: "quicksand", whiteSpace: "nowrap" }}
                  >
                    {t("Realisations")}
                  </span>
                  <img
                    src="/assets/icons/ic_down.svg"
                    width={25}
                    height={25}
                    alt="icone"
                  />
                </button>
                {"showRealisation" === openLink && (
                  <motion.ul
                    ref={subLinkRef}
                    className={`font-light absolute z-50 p-4 w-max rounded-md left-0 space-y-2 bg-blue text-white`}
                    variants={variants}
                    initial="closed"
                    animate={"showRealisation" === openLink ? "open" : "closed"}
                  >
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/activites/#composante"
                      >
                        {t("ReaParCompo")}
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/activites/#localite"
                      >
                        {t("ReaParLoc")}
                      </Link>
                    </li> */}
                    {/* <li>
                        <Link className="hover:text-yellow text-lg" to="/activites/#sise">
                          Système d'information et de suivi-évaluation
                        </Link>
                      </li> */}
                  </motion.ul>
                )}
              </li>

              <li
                className={`
                   group relative`}
              >
                <button
                  className="flex items-center text-white px-2 py-2 rounded hover:bg-black/10"
                  onClick={() => {
                    toggleState("showAnnonce");
                  }}
                >
                  <span
                    className="font-quicksand text-md max-w-fit uppercase"
                    style={{ font: "quicksand", whiteSpace: "nowrap" }}
                  >
                    {t("Annonces")}
                  </span>
                  <img
                    src="/assets/icons/ic_down.svg"
                    width={25}
                    height={25}
                    alt="icone"
                  />
                </button>
                {"showAnnonce" === openLink && (
                  <motion.ul
                    ref={subLinkRef}
                    className={`font-light absolute z-50 p-4 w-max rounded-md left-0 space-y-2 bg-blue text-white`}
                    variants={variants}
                    initial="closed"
                    animate={"showAnnonce" === openLink ? "open" : "closed"}
                  >
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/annonces?tabId=15"
                      >
                        {t("ConsultantIndi")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/annonces?tabId=29"
                      >
                        {t("ConsultantCab")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/annonces?tabId=16"
                      >
                        {t("Fournitures")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/annonces?tabId=17"
                      >
                        {t("Services")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/annonces?tabId=18"
                      >
                        {t("Travaux")}
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </li>

              <li
                className={`
                   group relative`}
              >
                <button
                  className="flex items-center text-white px-2 py-2 rounded hover:bg-black/10"
                  onClick={() => {
                    toggleState("showPlainte");
                  }}
                >
                  <span
                    className="font-quicksand text-md max-w-fit uppercase"
                    style={{ font: "quicksand", whiteSpace: "nowrap" }}
                  >
                    {t("IdeePlaintes")}
                  </span>
                  <img
                    src="/assets/icons/ic_down.svg"
                    width={25}
                    height={25}
                    alt="icone"
                  />
                </button>
                {"showPlainte" === openLink && (
                  <motion.ul
                    ref={subLinkRef}
                    className={`font-light absolute z-50 p-4 w-max rounded-md left-0 space-y-2 bg-blue text-white h-full`}
                    variants={variants}
                    initial="closed"
                    animate={"showPlainte" === openLink ? "open" : "closed"}
                  >
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/ideeplaintes/#ideeSud"
                      >
                        {t("IdeeSud")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/ideeplaintes/#deposer"
                      >
                        {t("DepPlaintes")}
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className="hover:text-yellow text-lg"
                        to="/ideeplaintes/#stats"
                      >
                        {t("StatPlaintes")}
                      </Link>
                    </li> */}
                  </motion.ul>
                )}
              </li>

              <li className="group relative text-white px-2 py-2 rounded hover:bg-black/10">
                <Link to="https://mapmionjo.mg" target="_blank">
                  <span
                    className="font-quicksand text-md max-w-fit uppercase"
                    style={{ font: "quicksand", whiteSpace: "nowrap" }}
                  >
                    {t("Cartographie")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="pr-4">
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

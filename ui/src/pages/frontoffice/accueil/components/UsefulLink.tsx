import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubTitle from "../../../../components/SubTitle";
import OneLink from "./OneLink";

const dataLinks = [
  {
    link: "https://www.presidence.gov.mg/",
    imgRef: "/assets/logos/logo_gasy.png",
  },
  { link: "http://mid.gov.mg/", imgRef: "/assets/logos/logo7.jpg" }, //mid

  { link: "https://www.minae.gov.mg", imgRef: "/assets/logos/logo8.png" }, //MINAE:
  { link: "https://www.mpeb.mg/", imgRef: "/assets/logos/logo9.png" }, //mpeb
  // { link: "http://mef.gov.mg", imgRef: "/assets/logos/logo12.jpg" },
  { link: "https://www.environnement.mg/", imgRef: "/assets/logos/logo10.jpg" }, //med
  { link: "#", imgRef: "/assets/logos/logo11.png" }, //meh
  { link: "https://cipotato.org/", imgRef: "/assets/logos/logo1.png" },
  {
    link: "https://www.crs.org/our-work-overseas/where-we-work/madagascar",
    imgRef: "/assets/logos/logo2.jpg",
  },
  { link: "https://www.fao.org/home/en", imgRef: "/assets/logos/logo13.jpg" },
  {
    link: "https://www.unicef.org/learning-crisis?gclid=Cj0KCQjwpc-oBhCGARIsAH6ote-1JfUYl2mdPp6jvfq0lhae-N8rjLUEjv_plqPWfUjgao5QiWu4vCwaAot-EALw_wcB",
    imgRef: "/assets/logos/logo4.png",
  },
  { link: "https://www.wfp.org/", imgRef: "/assets/logos/logo5.jpg" },
  { link: "https://www.tanymeva.org/en/", imgRef: "/assets/logos/logo6.png" },

  { link: "", imgRef: "/assets/logos/A2DM.jpg" },
  { link: "https://aim.co.mg/", imgRef: "/assets/logos/AIM.png" },
  {
    link: "https://avotraong-asso.mg",
    imgRef: "/assets/logos/ONG AVOTRA 10.jpg",
  },
];

const UsefulLink = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Augmenter cette valeur pour ralentir la transition des éléments enfants
        delayChildren: 0.5, // Augmenter cette valeur pour retarder le démarrage de l'animation
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Augmenter la durée pour ralentir l'animation de chaque élément
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col bg-grey lg:w-1/2 w-full my-12 pb-8" ref={ref}>
      <div className="flex justify-center items-center gap-4 mx-8">
        <div className="">
          {/* <img
            src="/assets/icons/ic_lienutile.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          /> */}
        </div>
        <div className="">
          <SubTitle title="LiensUtiles" className="text-blue Uppercase" />
        </div>
      </div>
      <div className="mt-8 flex justify-center px-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 md:grid-cols-3 gap-12"
          className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-8"
        >
          {dataLinks.map((dataLink, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center"
            >
              <OneLink link={dataLink.link} imgRef={dataLink.imgRef} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UsefulLink;

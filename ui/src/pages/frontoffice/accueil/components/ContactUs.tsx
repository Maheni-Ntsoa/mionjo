import { useTranslation } from "react-i18next";
import SubTitle from "../../../../components/SubTitle";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full lg:w-1/2 bg-grey my-12 pb-8">
      <div className="flex justify-center items-center gap-4">
        {/* <div className="">
          <img
            src="/assets/icons/ic_nouscontacter.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div> */}
        <div className="">
          <SubTitle title="NousContacter" className="text-blue Uppercase" />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col gap-4 lg:w-[1000px]">
          <div className=""></div>
          <div className="flex flex-col flex-start lg:items-center md:flex-row justify-between text-base text-blue px-14 font-semibold gap-2">
            <p>
              ADRESSE :{" "}
              <span className="font-light">Lot II A 105 G - Nanisana</span>
            </p>
            {/* <p>
              Téléphone : <span className="font-light">+261 34 29 596 64</span>
            </p> */}
            <p>
              EMAIL : <span className="font-light">mionjo@mionjo.mg</span>
            </p>
          </div>
          <div
            className=" p-4 w-full h-full mt-4 px-6 "
            style={{
              borderRadius: "8%",
            }}
          >
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import Button from "../../../../components/Button";
import SubTitle from "../../../../components/SubTitle";

const OrganisationInstitu = () => {
  return (
    <div className="flex flex-col w-full px-4">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <img
            src="/assets/icons/ic_organi.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="Organisation institutionnelle" />
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between w-full gap-4 md:gap-24">
        <div className="flex flex-col gap-2 w-full">
          <div className="">
            <h3 className="text-green font-semibold text-lg text-center">
              Au niveau central
            </h3>
          </div>
          <Button name="CNP" inverse={true} />
          <Button name="UNGP" inverse={true} />
          <Button name="Ministères PMO" inverse={true} />
        </div>
        <div className="border-r-4 border-brown h-1/2 translate translate-y-1/2 hidden md:block"></div>
        <div className="flex flex-col gap-2 w-full">
          <div className="">
            <h3 className="text-green font-semibold text-lg text-center">
              Au niveau régional
            </h3>
          </div>
          <Button name="PR" inverse={true} />
          <Button name="CCR" inverse={true} />
          <Button name="Equipe régional UNGP" inverse={true} />
        </div>
      </div>
    </div>
  );
};

export default OrganisationInstitu;

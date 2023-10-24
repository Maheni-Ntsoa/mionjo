import { HashLink as Link } from "react-router-hash-link";

interface OneAprocheProps {
    lien: string;
    resume: string;
    image: string;
    composanteNumber: string;
}

const HTMLRenderer = ({ html }: any) => {
    return (
        <div
            className="h-full w-full flex items-center"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

const OneAproche: React.FC<OneAprocheProps> = ({
    lien,
    resume,
    image,
    composanteNumber,
}) => {
    return (
        <Link to={lien} className="flex flex-col gap-1 border border-white rounded w-full lg:w-[200px] xl:w-[600px] h-[400px] xl:h-auto">
            <div className="w-full xl:w-[582px] h-[210px]">
                <img
                    src={`${image}`}
                    alt="rectangle"
                    className="cursor-pointer h-full w-full object-cover"
                />
            </div>
            <div className="flex justify-center font-semibold text-lg">
                <h1 className="p-2 ">{composanteNumber}</h1>
            </div>
            <div className="text-sm p-2 xl:text-lg flex justify-center w-full xl:w-[582px] text-justify">
                <p className="">{resume ? resume : ""}</p>
            </div>
        </Link>
    );
};

export default OneAproche;

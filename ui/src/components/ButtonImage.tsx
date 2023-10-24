import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ButtonImageProps {
  width?: string;
  height?: string;
  src: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const ButtonImage: React.FC<ButtonImageProps> = ({
  width,
  height,
  src,
  onClick,
  type = "button",
}) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      type={type}
      className={`outline-none ${width ? width : "w-[12rem]"}`}
    >
      <motion.img
        src={t(src)}
        className="w-full h-full"
        alt="button_image"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
      />
    </button>
  );
};

export default ButtonImage;

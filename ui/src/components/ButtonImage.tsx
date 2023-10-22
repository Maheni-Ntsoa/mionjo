import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ButtonImageProps {
  src: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const ButtonImage: React.FC<ButtonImageProps> = ({
  src,
  onClick,
  type = "button",
}) => {
  const { t } = useTranslation();
  return (
    <button onClick={onClick} type={type} className="outline-none">
      <motion.img
        src={t(src)}
        height={300}
        width={300}
        alt="button_image"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
      />
    </button>
  );
};

export default ButtonImage;

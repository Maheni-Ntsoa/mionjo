import { useNavigate } from "react-router-dom";
import ButtonImage from "./ButtonImage";

const SearchButton = () => {
  const navigate = useNavigate();

  return (
    <ButtonImage
      src="BtnSearch"
      onClick={() => navigate("/search")}
    />
  );
};

export default SearchButton;

interface ButtonProps {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  inverse?: boolean;
  buttonActiver?: boolean;
}

const Button = ({
  name,
  onClick,
  buttonActiver,
  type = "button",
  className,
  inverse,
}: ButtonProps) => {
  return (
    <button
      className={`${
        inverse
          ? "bg-yellow hover:bg-blue hover:text-white"
          : "bg-blue hover:bg-yellow rounded-xl"
      } text-white px-4 py-2 text-md ${className ? className : ""}`}
      onClick={onClick}
      type={type}
    >
      {name ? name : "Button"}
    </button>
  );
};

export default Button;

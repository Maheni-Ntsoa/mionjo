interface LongTexteProps {
  text: string;
}
const LongTexte: React.FC<LongTexteProps> = ({ text }) => {
  return (
    <div className="text-justify flex flex-wrap">
      <p>{text}</p>
    </div>
  );
};

export default LongTexte;

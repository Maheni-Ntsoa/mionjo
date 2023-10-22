import Annonces from "./components/Annonces";

const AnnoncesPage = () => {
  return (
    <div className="min-h-screen font-proximaNova">
      <div className="flex justify-center my-12" id="annonces">
        <Annonces />
      </div>
    </div>
  );
};

export default AnnoncesPage;

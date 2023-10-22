import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
import SlowInternetWarning from "../components/shared/SlowInternetWarning";
import LayoutAdmin from "../pages/admin/components/shared/LayoutAdmin";
import AccueilAdmin from "../pages/admin/pages/accueil";
import Annonces from "../pages/admin/pages/annonces";
import AproposAdmin from "../pages/admin/pages/apropos";
import Composantec from "../pages/admin/pages/composante";
import Documentation from "../pages/admin/pages/documentation";
import IdeeContributionAdmin from "../pages/admin/pages/ideePlainte";
import Inscription from "../pages/admin/pages/inscription";
import Login from "../pages/admin/pages/login";
import Realisation from "../pages/admin/pages/realisation";
import APropos from "../pages/frontoffice/aPropos";
import Accueil from "../pages/frontoffice/accueil";
import AnnoncesPage from "../pages/frontoffice/annonces";
import DocumentationPage from "../pages/frontoffice/documentations";
import IdeeEtPlaintes from "../pages/frontoffice/ideeEtPlaintes";
import Realisations from "../pages/frontoffice/realisations";
import Recherche from "../pages/frontoffice/recherche";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Accueil />
            </Layout>
          }
        />
        <Route
          path="apropos"
          element={
            <Layout>
              <APropos />
            </Layout>
          }
        />
        <Route
          path="activites"
          element={
            <Layout>
              <Realisations />
            </Layout>
          }
        />
        <Route
          path="documentations"
          element={
            <Layout>
              <DocumentationPage />
            </Layout>
          }
        />
        <Route
          path="annonces"
          element={
            <Layout>
              <AnnoncesPage />
            </Layout>
          }
        />
        <Route
          path="ideeplaintes"
          element={
            <Layout>
              <IdeeEtPlaintes />
            </Layout>
          }
        />
        <Route
          path="search"
          element={
            <Layout>
              <Recherche />
            </Layout>
          }
        />
        <Route
          path="internetWarning"
          element={
            <Layout>
              <SlowInternetWarning />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* admin */}
        <Route
          path="admin/*"
          element={
            <LayoutAdmin>
              <Routes>
                <Route path="" element={<AccueilAdmin />} />
                <Route path="AproposAdmin" element={<AproposAdmin />} />
                <Route path="Realisation" element={<Realisation />} />
                <Route path="composante" element={<Composantec />} />
                <Route path="documentation" element={<Documentation />} />
                <Route path="annonce" element={<Annonces />} />
                <Route
                  path="ideecontribution"
                  element={<IdeeContributionAdmin />}
                />
                <Route path="Inscription" element={<Inscription />} />
              </Routes>
            </LayoutAdmin>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

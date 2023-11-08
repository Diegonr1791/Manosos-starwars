import Layout from "@/Layouts/Layout";
import Loading from "@/components/Loading/Loading";
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const CharactersPage = lazy(() => import("@/pages/Characters/Characters"));
const PlanetsPage = lazy(() => import("@/pages/Planets/Planets"));
const ShipsPage = lazy(() => import("@/pages/SpaceCrafts/SpaceCrafts"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <main className="font-PlaypenSerif font-[400] min-h-screen">
        <Suspense fallback={<Loading color="secondary" size="lg" />}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              index
              element={<Layout children={<HomePage />} color="bg-black/80" />}
            />
            <Route
              path="/characters"
              index
              element={
                <Layout children={<CharactersPage />} color="bg-black/80" />
              }
            />
            <Route
              path="/planets"
              index
              element={
                <Layout children={<PlanetsPage />} color="bg-black/80" />
              }
            />
            <Route
              path="/spacecrafts"
              index
              element={<Layout children={<ShipsPage />} color="bg-black/80" />}
            />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default Router;

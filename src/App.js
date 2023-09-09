import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/layout/index";
import Loading from "./components/Loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const BusinessPage = lazy(() => import("./pages/BusinessPage"));
const EntertainmentPage = lazy(() => import("./pages/EntertainmentPage"));
const GeneralPage = lazy(() => import("./pages/GeneralPage"));
const HealthPage = lazy(() => import("./pages/HealthPage"));
const SciencePage = lazy(() => import("./pages/SciencePage"));
const SportPage = lazy(() => import("./pages/SportPage"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));
const NewPage = lazy(() => import("./pages/NewPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="entertainment" element={<EntertainmentPage />} />
            <Route path="general" element={<GeneralPage />} />
            <Route path="health" element={<HealthPage />} />
            <Route path="science" element={<SciencePage />} />
            <Route path="sports" element={<SportPage />} />
            <Route path="technology" element={<TechnologyPage />} />
            <Route path="/latest-news/newPage" element={<NewPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

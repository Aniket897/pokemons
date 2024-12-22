import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "./components/loading/PageLoading";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

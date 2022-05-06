import { Route, Routes, Navigate } from "react-router-dom";

import Countries from "./routes/Countries";
import CountryDetail from "./routes/CountryDetail";
import NotFound from "./routes/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="countries" />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:countryDetail" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

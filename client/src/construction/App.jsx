import { Route, Routes } from "react-router-dom";

import Layout from "../components/UI/template/Layout";
import { isRoutes } from "../components/utils/isFunc/isRoutes";

import "./App.css";

const App = () => {
  const routeComponents = isRoutes.map(({ path, component, protect }, key) => (
    <Route path={path} element={component} key={key} />
  ));

  return (
    <>
      <Layout>
        <Routes>
          <>{routeComponents}</>
        </Routes>
      </Layout>
    </>
  );
};

export default App;

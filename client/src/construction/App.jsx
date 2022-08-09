import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import Layout from "../components/template/Layout";

import "./App.css";

const App = () => {
  const routeComponents = routes.map(({ path, component, protect }, key) => (
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

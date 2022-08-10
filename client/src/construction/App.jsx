import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";

import Layout from "../components/template/Layout";

import "./App.css";
import useFetch from "../hooks/useFetch";

const App = () => {
  const data = useFetch("/");
  console.log("data", data);
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

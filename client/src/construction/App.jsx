import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "../components/UI/template/Layout";
import { isRoutes } from "../components/utils/isFunc/isRoutes";

import "./App.css";

const App = () => {
  const { user } = useAuth0();
  const [pathname, setPathname] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const url = "http://islington.com/roles";

  const string =
    pathname.split("/")[1].toString().charAt(0).toUpperCase() +
    pathname.split("/")[1].toString().slice(1);

  const role = user
    ? Object.entries(user).map(([key, value]) => {
        if (key === url) {
          return value[0];
        } else {
          return null;
        }
      })
    : null;

  const protectRoutes = isRoutes.map(({ path, component, protect }, key) => {
    if (protect) {
      return (
        role &&
        string === role[0] && (
          <Route path={path} element={component} key={key} />
        )
      );
    } else {
      return !protect && <Route path={path} element={component} key={key} />;
    }
  });

  return (
    <>
      <Layout>
        <Routes>
          <>{protectRoutes}</>
        </Routes>
      </Layout>
    </>
  );
};

export default App;

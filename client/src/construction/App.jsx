import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../components/template/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

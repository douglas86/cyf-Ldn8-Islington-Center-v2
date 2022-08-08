import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Lessons from "../pages/Lessons";
import Teacher from "../pages/Teacher";
import Layout from "../components/template/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

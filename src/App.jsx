import "./App.css";
import MainLayout from "./pages/MainLayout";
import ProjectsLayout from "./pages/ProjectsLayout";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import FixedButtons from "./components/ui/FixedButtons";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" />
      <FixedButtons />
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/projects" element={<ProjectsLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;

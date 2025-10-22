import "./App.css";
import MainLayout from "./pages/MainLayout";
import ProjectsLayout from "./pages/ProjectsLayout";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import FixedButtons from "./components/ui/FixedButtons";
import ContactLayout from "./pages/ContactLayout";
import ResumeLayout from "./pages/ResumeLayout";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Toaster position="bottom-right" />
      <FixedButtons />
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/projects" element={<ProjectsLayout />}></Route>
        <Route path="/contact" element={<ContactLayout />}></Route>
        <Route path="/resume" element={<ResumeLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;

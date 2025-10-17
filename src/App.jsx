import "./App.css";
import MainLayout from "./pages/MainLayout";
import ProjectsLayout from "./pages/ProjectsLayout";

import { Route, Routes, ScrollRestoration } from "react-router-dom";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}></Route>
                <Route path="/projects" element={<ProjectsLayout />}></Route>
            </Routes>
        </>
    );
}

export default App;

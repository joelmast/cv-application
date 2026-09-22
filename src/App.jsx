import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";

function App() {
    return (
        <>
            <GeneralInfo />
            <Education />
            <Experience />
            <CvPreview />
        </>
    );
}

export default App;

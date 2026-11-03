import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";

function App() {
    return (
        <>
            <div>
                <GeneralInfo />
                <Education />
                <Experience />
            </div>
            <CvPreview />
        </>
    );
}

export default App;

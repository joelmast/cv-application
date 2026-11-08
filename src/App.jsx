import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";

function App() {
    const [generalInfo, setGeneralInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState({});
    const [experienceInfo, setExperienceInfo] = useState({});

    return (
        <>
            <div>
                <GeneralInfo onUpdate={setGeneralInfo} />
                <Education onUpdate={setEducationInfo} />
                <Experience />
            </div>
            <CvPreview
                generalInfo={generalInfo}
                educationInfo={educationInfo}
            />
        </>
    );
}

export default App;

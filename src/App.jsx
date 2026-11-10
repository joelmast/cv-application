import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [educationInfo, setEducationInfo] = useState([
        {
            id: crypto.randomUUID(),
            schoolName: "",
            studyTitle: "",
            studyDate: "",
        },
    ]);
    const [experienceInfo, setExperienceInfo] = useState({
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
    });

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

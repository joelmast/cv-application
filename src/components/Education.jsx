import { useState } from "react";

function Education() {
    const [educationInfo, setEducationInfo] = useState({
        schoolName: "",
        studyTitle: "",
        studyDate: "",
    });
    function handleInput(e) {
        const { name, value } = e.target;
        setEducationInfo({
            ...educationInfo,
            [name]: value,
        });
    }

    return (
        <>
            <h1>Education</h1>
            <input
                type="text"
                name="schoolName"
                value={educationInfo.schoolName}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="text"
                name="studyTitle"
                value={educationInfo.studyTitle}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="date"
                name="studyDate"
                value={educationInfo.studyDate}
                onChange={(e) => handleInput(e)}
            />
            <h1>{educationInfo.schoolName}</h1>
            <h1>{educationInfo.studyTitle}</h1>
            <h1>{educationInfo.studyDate}</h1>
        </>
    );
}

export default Education;

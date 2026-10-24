import { useState } from "react";

function Experience() {
    const [experienceInfo, setExperienceInfo] = useState({
        companyName: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
    });

    function handleInput(e) {
        const { name, value } = e.target;
        setExperienceInfo({
            ...experienceInfo,
            [name]: value,
        });
    }

    return (
        <>
            <h1>Education</h1>
            <input
                type="text"
                name="companyName"
                value={experienceInfo.companyName}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="text"
                name="position"
                value={experienceInfo.position}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="text"
                name="responsibilities"
                value={experienceInfo.responsibilities}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="date"
                name="startDate"
                value={experienceInfo.startDate}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="date"
                name="endDate"
                value={experienceInfo.endDate}
                onChange={(e) => handleInput(e)}
            />
        </>
    );
}

export default Experience;

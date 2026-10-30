import { useState } from "react";

function Education() {
    const [educationInfo, setEducationInfo] = useState([
        {
            id: crypto.randomUUID(),
            schoolName: "",
            studyTitle: "",
            studyDate: "",
        },
    ]);

    // Updates values of specific education entry's
    function handleInput(e, id) {
        const { name, value } = e.target;
        setEducationInfo(
            educationInfo.map((item) => {
                if (item.id === id) {
                    return { ...item, [name]: value };
                }
                return item;
            }),
        );
    }

    function newInput() {
        setEducationInfo([
            ...educationInfo,
            {
                id: crypto.randomUUID(),
                schoolName: "",
                studyTitle: "",
                studyDate: "",
            },
        ]);
    }
    return (
        <>
            <button onClick={() => newInput()}>Add New</button>
            {educationInfo.map((item) => (
                <div className="education-div" key={item.id}>
                    <h3 className="education-h3">Education</h3>
                    <input
                        type="text"
                        name="schoolName"
                        value={item.schoolName}
                        id={item.id}
                        onChange={(e) => handleInput(e, item.id)}
                    />
                    <input
                        type="text"
                        name="studyTitle"
                        value={item.studyTitle}
                        id={item.id}
                        onChange={(e) => handleInput(e, item.id)}
                    />
                    <input
                        type="date"
                        name="studyDate"
                        value={item.studyDate}
                        id={item.id}
                        onChange={(e) => handleInput(e, item.id)}
                    />
                    <h1>{item.schoolName}</h1>
                    <h1>{item.studyTitle}</h1>
                    <h1>{item.studyDate}</h1>
                </div>
            ))}
        </>
    );
}

export default Education;

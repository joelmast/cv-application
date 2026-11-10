import { useState } from "react";

function Education({ onUpdate }) {
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
                    onUpdate([{ ...item, [name]: value }]);
                    return { ...item, [name]: value };
                }
                onUpdate(item);
                return item;
            }),
        );
    }

    function newInput() {
        let newEducation = [
            ...educationInfo,
            {
                id: crypto.randomUUID(),
                schoolName: "",
                studyTitle: "",
                studyDate: "",
            },
        ];
        console.log(newEducation);
        onUpdate(newEducation);
        setEducationInfo(newEducation);
    }

    function handleDelete(id) {
        if (educationInfo.length > 1) {
            setEducationInfo(educationInfo.filter((item) => item.id !== id));
            onUpdate(educationInfo.filter((item) => item.id !== id));
        } else {
            setEducationInfo([
                {
                    id: crypto.randomUUID(),
                    schoolName: "",
                    studyTitle: "",
                    studyDate: "",
                },
            ]);
            onUpdate([
                {
                    id: crypto.randomUUID(),
                    schoolName: "",
                    studyTitle: "",
                    studyDate: "",
                },
            ]);
        }
    }
    return (
        <>
            <h1 className="education-h1">Education</h1>
            <button onClick={() => newInput()}>Add New</button>
            {educationInfo.map((item) => (
                <div className="education-div" key={item.id}>
                    <label>
                        Name of School:
                        <input
                            type="text"
                            name="schoolName"
                            value={item.schoolName}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <label>
                        Title of Study:
                        <input
                            type="text"
                            name="studyTitle"
                            value={item.studyTitle}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <label>
                        Date of Study:
                        <input
                            type="date"
                            name="studyDate"
                            value={item.studyDate}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}

export default Education;

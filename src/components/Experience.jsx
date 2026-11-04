import { useState } from "react";

function Experience() {
    const [experienceInfo, setExperienceInfo] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
        },
    ]);

    function handleInput(e, id) {
        const { name, value } = e.target;
        setExperienceInfo(
            experienceInfo.map((item) => {
                if (item.id === id) {
                    return { ...item, [name]: value };
                }
                return item;
            }),
        );
    }

    function newInput() {
        setExperienceInfo([
            ...experienceInfo,
            {
                id: crypto.randomUUID(),
                companyName: "",
                position: "",
                responsibilities: "",
                startDate: "",
                endDate: "",
            },
        ]);
    }

    function handleDelete(id) {
        if (experienceInfo.length > 1) {
            setExperienceInfo(experienceInfo.filter((item) => item.id !== id));
        } else {
            setExperienceInfo([
                {
                    id: crypto.randomUUID(),
                    companyName: "",
                    position: "",
                    responsibilities: "",
                    startDate: "",
                    endDate: "",
                },
            ]);
        }
    }

    return (
        <>
            <h1 className="experience-h1">Experience</h1>
            <button onClick={() => newInput()}>Add New</button>
            {experienceInfo.map((item) => (
                <div className="experience-div">
                    <label>
                        Name of Company:
                        <input
                            type="text"
                            name="companyName"
                            value={item.companyName}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <label>
                        Position at Company:
                        <input
                            type="text"
                            name="position"
                            value={item.position}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <label>
                        Responsibilities:
                        <input
                            type="text"
                            name="responsibilities"
                            value={item.responsibilities}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <label>
                        Start Date:
                        <input
                            type="date"
                            name="startDate"
                            value={item.startDate}
                            id={item.id}
                            onChange={(e) => handleInput(e, item.id)}
                        />
                    </label>

                    <label>
                        End Date:
                        <input
                            type="date"
                            name="endDate"
                            value={item.endDate}
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

export default Experience;

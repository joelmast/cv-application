import { useState } from "react";

function GeneralInfo({ onUpdate }) {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });
    function handleInput(e) {
        const { name, value } = e.target;
        const updatedInfo = {
            ...generalInfo,
            [name]: value,
        };
        setGeneralInfo(updatedInfo);
        onUpdate(updatedInfo);
    }
    return (
        <>
            <div className="generalInfo-div">
                <h1 className="general-info-title">General Info</h1>

                <label>
                    Name:
                    <input
                        name="name"
                        value={generalInfo.name}
                        onChange={(e) => handleInput(e)}
                    />
                </label>

                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={generalInfo.email}
                        onChange={(e) => handleInput(e)}
                    />
                </label>

                <label>
                    Phone:
                    <input
                        name="phone"
                        type="tel"
                        value={generalInfo.phone}
                        onChange={(e) => handleInput(e)}
                    />
                </label>
            </div>
        </>
    );
}

export default GeneralInfo;

import { useState } from "react";

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });
    function handleInput(e) {
        const { name, value } = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value,
        });
    }
    return (
        <>
            <h1>General Info</h1>
            <input
                name="name"
                value={generalInfo.name}
                onChange={(e) => handleInput(e)}
            />
            <input
                name="email"
                type="email"
                value={generalInfo.email}
                onChange={(e) => handleInput(e)}
            />
            <input
                name="phone"
                type="tel"
                value={generalInfo.phone}
                onChange={(e) => handleInput(e)}
            />
            {/* FOR TESTING, DELETE LATER */}
            {/* <h1>{generalInfo.name}</h1>
            <h1>{generalInfo.email}</h1>
            <h1>{generalInfo.phone}</h1> */}
        </>
    );
}

export default GeneralInfo;

import { useState } from "react";

function GeneralInfo() {
    const [input, setInput] = useState("");
    function handleInput(input) {
        setInput(input);
    }
    return (
        <>
            <input
                value={input}
                onChange={(e) => handleInput(e.target.value)}
            />
            <h1>{input}</h1>
        </>
    );
}

export default GeneralInfo;

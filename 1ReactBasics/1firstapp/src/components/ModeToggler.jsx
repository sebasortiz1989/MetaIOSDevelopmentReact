import {useState} from "react";

function ModeToggler() {
    const [darkModeOn, setIsDarkMode] = useState(true);
    const darkMode = <h1>Dark mode is On</h1>
    const lightMode = <h1>Light mode is On</h1>

    function handleClick() {
        setIsDarkMode(!darkModeOn);
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default ModeToggler;
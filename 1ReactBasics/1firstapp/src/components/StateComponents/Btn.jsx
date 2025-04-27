import {useState} from "react";

function Btn() {
    const [isClicked, setIsClicked] = useState(false);

    const buttonStyle = {
        maxWidth: "200px",
        height: "60px",
        margin: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        backgroundColor: isClicked ? "#4CAF50" : "#ffffff",
        color: isClicked ? "#ffffff" : "#000000",
        transition: "all 0.3s ease",
    }

    function clickHandler() {
        console.log("Clicked");
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    }

    return (
        <button onClick={clickHandler} style={buttonStyle}>Click me</button>
    );
}

export default Btn;
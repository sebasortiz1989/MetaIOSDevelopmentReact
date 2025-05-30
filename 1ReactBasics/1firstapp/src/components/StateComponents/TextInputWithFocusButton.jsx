import {useRef} from "react";

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <div className="vertical-container">
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export default TextInputWithFocusButton;
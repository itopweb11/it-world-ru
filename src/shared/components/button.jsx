import React from "react";

const Button = (button, buttonType) => {

    return (
        <button type={buttonType} className="button">
            {button.button}
        </button>
    )
}

export default Button;
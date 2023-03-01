import React from "react";

const Button = (button, setRegistration) => {

    return (
        <button onClick={() => {setRegistration(true)}} className="button">
            {button.button}
        </button>
    )
}

export default Button;
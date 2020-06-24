import React from "react";
import './custom-button.style.scss'


const CustomButton = ({ children,isGoogleButton,inverted,...otherProps }) =>(

    <button className={`${isGoogleButton?'googleButton':''} ${inverted?'inverted':''} custom-button`}  {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
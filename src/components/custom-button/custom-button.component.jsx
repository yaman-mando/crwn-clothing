import React from "react";
import './custom-button.style.scss'


const CustomButton = ({ children,isGoogleButton,...otherProps }) =>(

    <button className={`${isGoogleButton?'googleButton':''} custom-button`}  {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
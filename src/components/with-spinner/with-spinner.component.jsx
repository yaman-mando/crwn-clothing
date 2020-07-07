import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        console.log(isLoading?'loading':'component');

        return isLoading ?
            (
                <SpinnerOverlay>
                    <SpinnerContainer/>
                </SpinnerOverlay>
            )
            :
            (
                <WrappedComponent {...otherProps} />
            );
    };
    return Spinner;
};

export default WithSpinner;
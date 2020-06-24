import React from "react";
import './stripe-button.style.scss'
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxVm7KH8d3RUajLCLqSY5jqTdRNwKcPGSrwTRQ728RIAbFLGenMbHpm8l6aM2HKdi1XCiLdIgp7AyJPauzvRiXl00kM0IEUu3';

    const onToken = token =>{
        console.log(token);
        if(token){
            alert('Payment was successfully')
        }
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Yaman Marketing App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`The Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;